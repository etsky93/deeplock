import { themes } from "./themes";
import VariantLanding from "./components/VariantLanding";

export default function Home() {
  const steel = themes.find((t) => t.id === 6)!;
  return <VariantLanding theme={steel} />;
}
