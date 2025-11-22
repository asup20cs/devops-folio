import { cn } from "@/lib/utils";

export const Section = ({
    id,
    title,
    children,
    className
}: {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}) => (
    <section id={id} className={cn("py-12 scroll-mt-20", className)}>
        <h2 className="text-3xl font-bold tracking-tight mb-6">{title}</h2>
        {children}
    </section>
);
