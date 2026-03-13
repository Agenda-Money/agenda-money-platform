import * as z from "zod";

const ghanaPhoneRegex = /^(0|233)\d{8,12}$/;

export const loanEnquirySchema = z.object({
  fullName: z.string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be at most 100 characters")
    .trim(),
  mobileNumber: z.string()
    .transform((val) => val.replace(/[\s-]/g, ""))
    .pipe(z.string().regex(ghanaPhoneRegex, "Enter a valid phone number")),
  region: z.string({
    required_error: "Please select a region",
  }).min(1, "Please select a region"),
  hasValidId: z.literal(true, {
    errorMap: () => ({ message: "You must have a valid National ID" }),
  }),
  isAgedEighteenPlus: z.literal(true, {
    errorMap: () => ({ message: "You must be 18 years or above" }),
  }),
});

export type LoanEnquiryValues = z.infer<typeof loanEnquirySchema>;

export const supportSchema = z.object({
  fullName: z.string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be at most 100 characters")
    .trim(),
  phone: z.string()
    .transform((val) => val.replace(/[\s-]/g, ""))
    .pipe(z.string().regex(ghanaPhoneRegex, "Enter a valid phone number")),
  email: z.string().trim().email("Enter a valid email address").optional().or(z.literal("")),
  subject: z.string()
    .min(3, "Subject must be at least 3 characters")
    .max(150, "Subject must be at most 150 characters")
    .trim(),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be at most 2000 characters")
    .trim(),
});

export type SupportValues = z.infer<typeof supportSchema>;
