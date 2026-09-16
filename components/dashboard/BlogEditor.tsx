"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { LoaderCircle, Upload } from "lucide-react";
import { blogCategories } from "@/lib/dashboard";
import type { BlogPost } from "@/lib/blog-types";
import { makeSlug } from "@/lib/slug";

type Props = {
  mode: "create" | "edit";
  initial?: BlogPost;
};

export function BlogEditor({ mode, initial }: Props) {
  const router = useRouter();
  const [title, setTitle] = useState(initial?.title ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(Boolean(initial?.slug));
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
  const [content, setContent] = useState(initial?.content ?? "");
  const [category, setCategory] = useState(
    initial?.category ?? blogCategories[0],
  );
  const [coverImage, setCoverImage] = useState(initial?.coverImage ?? "");
  const [metaTitle, setMetaTitle] = useState(initial?.metaTitle ?? "");
  const [metaDescription, setMetaDescription] = useState(
    initial?.metaDescription ?? "",
  );
  const [status, setStatus] = useState<"draft" | "published">(
    initial?.status ?? "draft",
  );
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const previewUrl = useMemo(
    () => `/blog/${slug || makeSlug(title) || "post-url"}`,
    [slug, title],
  );

  async function handleImageUpload(file: File) {
    setUploading(true);
    setError("");
    try {
      const body = new FormData();
      body.append("file", file);
      const response = await fetch("/api/uploads", {
        method: "POST",
        body,
      });
      const payload = (await response.json()) as { url?: string; error?: string };
      if (!response.ok || !payload.url) {
        throw new Error(payload.error || "Upload failed.");
      }
      setCoverImage(payload.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      title,
      slug: slug || makeSlug(title),
      excerpt,
      content,
      category,
      coverImage,
      metaTitle: metaTitle || title,
      metaDescription: metaDescription || excerpt,
      status,
    };

    try {
      const response = await fetch(
        mode === "edit" && initial
          ? `/api/blogs/${initial.id}`
          : "/api/blogs",
        {
          method: mode === "edit" ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      const result = (await response.json()) as {
        post?: BlogPost;
        error?: string;
      };
      if (!response.ok || !result.post) {
        throw new Error(result.error || "Unable to save post.");
      }
      router.push("/dashboard/blogs");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to save post.");
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 xl:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-5">
          <Field label="Title">
            <input
              required
              value={title}
              onChange={(event) => {
                const next = event.target.value;
                setTitle(next);
                if (!slugTouched) setSlug(makeSlug(next));
                if (!metaTitle) setMetaTitle(next);
              }}
              className={inputClass}
              placeholder="Post title"
            />
          </Field>

          <Field label="URL slug">
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-navy-950/70 px-3">
              <span className="text-xs text-slate-500">/blog/</span>
              <input
                required
                value={slug}
                onChange={(event) => {
                  setSlugTouched(true);
                  setSlug(makeSlug(event.target.value));
                }}
                className="w-full bg-transparent py-3 text-sm text-white outline-none"
                placeholder="post-url"
              />
            </div>
            <p className="mt-2 text-xs text-slate-500">Public URL: {previewUrl}</p>
          </Field>

          <Field label="Excerpt">
            <textarea
              required
              rows={3}
              value={excerpt}
              onChange={(event) => {
                setExcerpt(event.target.value);
                if (!metaDescription) setMetaDescription(event.target.value);
              }}
              className={inputClass}
              placeholder="Short summary for cards and SEO fallback"
            />
          </Field>

          <Field label="Content">
            <textarea
              required
              rows={12}
              value={content}
              onChange={(event) => setContent(event.target.value)}
              className={inputClass}
              placeholder="Write the full blog post..."
            />
          </Field>
        </div>

        <div className="space-y-5">
          <Field label="Cover image">
            <div className="rounded-2xl border border-dashed border-white/15 bg-navy-950/50 p-4">
              {coverImage ? (
                <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-xl">
                  <Image
                    src={coverImage}
                    alt="Cover preview"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ) : (
                <p className="mb-3 text-sm text-slate-400">
                  Upload a cover image for social and blog cards.
                </p>
              )}
              <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
                {uploading ? (
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                ) : (
                  <Upload className="h-4 w-4" />
                )}
                {uploading ? "Uploading..." : "Upload image"}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (file) void handleImageUpload(file);
                  }}
                />
              </label>
              {coverImage ? (
                <button
                  type="button"
                  className="ml-2 text-xs text-slate-400 hover:text-white"
                  onClick={() => setCoverImage("")}
                >
                  Remove
                </button>
              ) : null}
            </div>
          </Field>

          <Field label="Category">
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className={inputClass}
            >
              {blogCategories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Status">
            <select
              value={status}
              onChange={(event) =>
                setStatus(event.target.value as "draft" | "published")
              }
              className={inputClass}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </Field>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              SEO
            </p>
            <div className="mt-4 space-y-4">
              <Field label="Meta title">
                <input
                  value={metaTitle}
                  onChange={(event) => setMetaTitle(event.target.value)}
                  className={inputClass}
                  placeholder="SEO title (50–60 chars ideal)"
                  maxLength={70}
                />
                <p className="mt-1 text-[11px] text-slate-500">
                  {metaTitle.length}/70
                </p>
              </Field>
              <Field label="Meta description">
                <textarea
                  rows={3}
                  value={metaDescription}
                  onChange={(event) => setMetaDescription(event.target.value)}
                  className={inputClass}
                  placeholder="SEO description (140–160 chars ideal)"
                  maxLength={160}
                />
                <p className="mt-1 text-[11px] text-slate-500">
                  {metaDescription.length}/160
                </p>
              </Field>
            </div>
          </div>
        </div>
      </div>

      {error ? <p className="text-sm text-rose-300">{error}</p> : null}

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-400 disabled:opacity-60"
        >
          {saving ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
          {mode === "edit" ? "Update post" : "Create post"}
        </button>
        <Link
          href="/dashboard/blogs"
          className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-300"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm text-slate-300">
      <span className="mb-2 block font-medium text-white">{label}</span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-navy-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand-400/40";
