import { notFound } from "next/navigation";
import { themes } from "../../themes";
import VariantLanding from "../../components/VariantLanding";

export function generateStaticParams() {
  return themes.map((t) => ({ id: String(t.id) }));
}

export default async function VariantPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const theme = themes.find((t) => t.id === Number(id));
  if (!theme) return notFound();
  return <VariantLanding theme={theme} />;
}
