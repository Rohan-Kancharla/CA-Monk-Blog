import { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-background p-4 text-center">
                    <AlertTriangle className="h-10 w-10 text-destructive" />
                    <h1 className="text-2xl font-bold">Something went wrong</h1>
                    <p className="text-muted-foreground max-w-md">
                        {this.state.error?.message || "An unexpected error occurred."}
                    </p>
                    <Button onClick={() => window.location.reload()}>
                        Reload Application
                    </Button>
                </div>
            );
        }

        return this.props.children;
    }
}
