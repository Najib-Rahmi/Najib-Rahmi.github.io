"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Send,
  Loader2,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { socialLinks, profile } from "@/lib/portfolio-data";

type FieldErrors = Record<string, string>;

export function Contact() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [errors, setErrors] = React.useState<FieldErrors>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!res.ok) {
        if (result.errors) {
          setErrors(result.errors as FieldErrors);
        }
        toast({
          title: "Could not send message",
          description: result.error ?? "Please check your input and try again.",
          variant: "destructive",
        });
        return;
      }

      setDone(true);
      form.reset();
      toast({
        title: "Message sent",
        description: result.message ?? "Thanks for reaching out!",
      });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  // Social links plus the location, shown together without a card box.
  const socialItems = [
    ...socialLinks,
    {
      label: profile.location,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        profile.location
      )}`,
      icon: MapPin,
    },
  ];

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a project in mind or just want to say hello? My inbox is always open."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Left: info + socials */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col justify-center gap-4"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Find me online
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialItems.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="grid place-items-center size-12 rounded-xl border border-cyan-500/15 bg-background text-muted-foreground transition-all hover:-translate-y-1 hover:border-cyan-500/45 hover:text-cyan-600 dark:hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <social.icon className="size-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-cyan-500/15 bg-card p-6 sm:p-8 space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Jane Doe"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={
                      errors.name
                        ? "border-destructive focus-visible:ring-destructive/30"
                        : ""
                    }
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={
                      errors.email
                        ? "border-destructive focus-visible:ring-destructive/30"
                        : ""
                    }
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={14}
                  placeholder="Tell me about your project, your team, or just say hi..."
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={
                    errors.message
                      ? "border-destructive focus-visible:ring-destructive/30 resize-none min-h-80"
                      : "resize-none min-h-80"
                  }
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={submitting || done}
                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:brightness-110 border-0"
              >
                {submitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Sending...
                  </>
                ) : done ? (
                  <>
                    <CheckCircle2 className="size-4" />
                    Sent
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    Send Message
                  </>
                )}
              </Button>

              {done && (
                <p className="text-sm text-cyan-600 dark:text-cyan-400">
                  Thanks for reaching out! Feel free to send another message
                  anytime.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
