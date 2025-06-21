import { AboutSection } from "@/src/presentation/modules/about-section";
interface AboutPageProps {
  params: {
    id: string
  }
}
export default function AboutPage({params}:AboutPageProps) {
  const {id} = params
  return <AboutSection id={id} />;
}
