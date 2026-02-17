import { useState } from "react";
import { Send, User, Mail, MessageSquare, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // TODO: wire up to backend / email API
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <div className="mx-auto max-w-lg rounded-xl border border-white/[0.06] bg-white/[0.02] p-10 text-center backdrop-blur-sm">
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
                    <Send className="size-6 text-emerald-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Message Sent</h3>
                <p className="text-sm text-muted-foreground">
                    Thank you! We'll get back to you within 24 hours.
                </p>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            aria-label="Contact form to get in touch with Dodera Software for project inquiries"
            className="mx-auto max-w-lg space-y-5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm"
        >
            <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                    <label htmlFor="contact-name" className="flex items-center gap-2 text-sm font-medium">
                        <User className="size-3.5 text-muted-foreground" />
                        Name
                    </label>
                    <Input
                        id="contact-name"
                        required
                        name="name"
                        autoComplete="name"
                        placeholder="Your name"
                        className="border-white/[0.08] bg-white/[0.03]"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="contact-email" className="flex items-center gap-2 text-sm font-medium">
                        <Mail className="size-3.5 text-muted-foreground" />
                        Email
                    </label>
                    <Input
                        id="contact-email"
                        required
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        className="border-white/[0.08] bg-white/[0.03]"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="contact-company" className="flex items-center gap-2 text-sm font-medium">
                    <Building className="size-3.5 text-muted-foreground" />
                    Company
                </label>
                <Input
                    id="contact-company"
                    name="company"
                    autoComplete="organization"
                    placeholder="Company name (optional)"
                    className="border-white/[0.08] bg-white/[0.03]"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="contact-message" className="flex items-center gap-2 text-sm font-medium">
                    <MessageSquare className="size-3.5 text-muted-foreground" />
                    Project Details
                </label>
                <Textarea
                    id="contact-message"
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project, timeline, and budget..."
                    className="resize-none border-white/[0.08] bg-white/[0.03]"
                />
            </div>

            <Button type="submit" size="lg" className="w-full">
                Send Message
                <Send className="ml-2 size-4" />
            </Button>
        </form>
    );
}
