"use client";

import toast from "react-hot-toast";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Server } from "lucide-react";

interface ApiAlertProps {
    title: string,
    description: string,
    variant: "public" | "admin";
}

const textMap: Record<ApiAlertProps["variant"], string> = {
    public: "Public",
    admin: "Admin"
}

const variantMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = {
    public: "secondary",
    admin: "destructive"
}

export const ApiAlert: React.FC<ApiAlertProps> = ({
    title,
    description,
    variant = "public"
}) => {
    const onCopy = () => {
        navigator.clipboard.writeText(description);
        toast.success("API copied to the clipboard.")
    }

    return (
        <Alert className="bg-gradient-to-r from-[#947a70] to-[#bd9d92]  border-[#D7BE9A] border text-white">
            <Server className="h-4 w-4 text-white bg-white" />
            <AlertTitle className="flex items-center gap-x-2 text-white">
                {title}
                <Badge variant={variantMap[variant]}>
                    {textMap[variant]}
                </Badge>
            </AlertTitle>
            <AlertDescription className="mt-4 flex items-center justify-between">
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2 rem] font-mono text-sm font-semibold text-black">
                    {description}
                </code>
                <Button variant="beige" size="icon" onClick={onCopy}>
                    <Copy className="h-4 w-4 text-white" />
                </Button>
            </AlertDescription>
        </Alert>
    )
}