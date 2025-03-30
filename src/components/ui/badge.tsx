
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        softGreen: "border-transparent bg-[#F2FCE2] text-[#4B7F52] hover:bg-[#E2ECE2]/80",
        softYellow: "border-transparent bg-[#FEF7CD] text-[#917E12] hover:bg-[#EEE7BD]/80",
        softOrange: "border-transparent bg-[#FEC6A1] text-[#A0530F] hover:bg-[#EEB691]/80",
        softPurple: "border-transparent bg-[#E5DEFF] text-[#5B40BC] hover:bg-[#D5CEEF]/80",
        softPink: "border-transparent bg-[#FFDEE2] text-[#B54A59] hover:bg-[#EFCED2]/80",
        softPeach: "border-transparent bg-[#FDE1D3] text-[#B06443] hover:bg-[#EDD1C3]/80",
        softBlue: "border-transparent bg-[#D3E4FD] text-[#3B6FC7] hover:bg-[#C3D4ED]/80",
        softGray: "border-transparent bg-[#F1F0FB] text-[#5F5D7A] hover:bg-[#E1E0EB]/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
