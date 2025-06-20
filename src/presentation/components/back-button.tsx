import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function BackButton() {
  return (
    <div className="mb-6">
      <Link href="/">
        <Button
          variant="outline"
          className="flex items-center space-x-2 bg-white text-gray-700 hover:bg-gray-50"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar para início</span>
        </Button>
      </Link>
    </div>
  );
}
