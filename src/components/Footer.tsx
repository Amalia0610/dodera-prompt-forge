export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
            <span className="text-xs font-black text-primary-foreground">D</span>
          </div>
          <span className="text-sm font-bold tracking-tight text-foreground">
            DODERA<span className="font-light text-muted-foreground ml-1">SOFTWARE</span>
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dodera Software. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
