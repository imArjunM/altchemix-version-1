import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Upload, CheckCircle, Building2, User, Mail, Briefcase, Factory, MessageSquare } from 'lucide-react';
import { staggerContainer, fadeUp } from '@/lib/motion';
import { useToast } from '@/hooks/use-toast';

const industries = [
  'Packaging',
  'Pipes & Agriculture',
  'Wire & Cable',
  'Fibers & Textiles',
  'Healthcare',
  'Appliances',
  'Automotive',
  'Other',
];

const roles = [
  'Procurement',
  'R&D / Technical',
  'Production / Operations',
  'Management',
  'Other',
];

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent successfully",
      description: "Our team will get back to you within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-success" />
        </div>
        <h3 className="text-h3 text-primary mb-2">Thank You!</h3>
        <p className="text-body text-muted-foreground mb-6">
          Your message has been received. Our team will contact you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn-secondary"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-caption font-medium text-primary mb-2">
          Company Name *
        </label>
        <div className="relative">
          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            id="company"
            name="company"
            required
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cta/50 focus:border-cta transition-colors"
            placeholder="Your company name"
          />
        </div>
      </div>

      {/* Name & Email Row */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-caption font-medium text-primary mb-2">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cta/50 focus:border-cta transition-colors"
              placeholder="Your full name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-caption font-medium text-primary mb-2">
            Work Email *
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cta/50 focus:border-cta transition-colors"
              placeholder="you@company.com"
            />
          </div>
        </div>
      </div>

      {/* Role & Industry Row */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="role" className="block text-caption font-medium text-primary mb-2">
            Your Role
          </label>
          <div className="relative">
            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            <select
              id="role"
              name="role"
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background text-primary focus:outline-none focus:ring-2 focus:ring-cta/50 focus:border-cta transition-colors appearance-none cursor-pointer"
            >
              <option value="">Select your role</option>
              {roles.map((role) => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="industry" className="block text-caption font-medium text-primary mb-2">
            Industry
          </label>
          <div className="relative">
            <Factory className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            <select
              id="industry"
              name="industry"
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background text-primary focus:outline-none focus:ring-2 focus:ring-cta/50 focus:border-cta transition-colors appearance-none cursor-pointer"
            >
              <option value="">Select your industry</option>
              {industries.map((ind) => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-caption font-medium text-primary mb-2">
          How can we help? *
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cta/50 focus:border-cta transition-colors resize-none"
            placeholder="Tell us about your project requirements, application, or questions..."
          />
        </div>
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-caption font-medium text-primary mb-2">
          Attach Files (optional)
        </label>
        <label className="flex items-center justify-center gap-2 w-full py-4 rounded-lg border-2 border-dashed border-border hover:border-cta/50 cursor-pointer transition-colors">
          <Upload className="w-5 h-5 text-muted-foreground" />
          <span className="text-caption text-muted-foreground">
            Drop files here or click to upload
          </span>
          <input type="file" className="hidden" multiple />
        </label>
        <p className="text-small text-muted-foreground mt-1">
          PDF, DOC, or image files up to 10MB
        </p>
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="w-4 h-4" />
            Send Message
          </span>
        )}
      </motion.button>

      <p className="text-small text-muted-foreground text-center">
        By submitting, you agree to our privacy policy. We'll never share your information.
      </p>
    </form>
  );
};
