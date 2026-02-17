interface LogoProps {
    className?: string;
}

/** Reusable brand mark + wordmark used in Navbar and Footer. */
export function Logo({ className }: LogoProps) {
    return (
        <span className={className}>
            <span className="flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-lg bg-primary">
                    <span className="text-sm font-black text-primary-foreground">D</span>
                </span>
                <span className="text-lg font-bold tracking-tight">
                    DODERA
                    <span className="ml-1 font-light text-muted-foreground">SOFTWARE</span>
                </span>
            </span>
        </span>
    );
}
