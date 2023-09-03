import SocialIcons from "@/components/SocialIcons";

function AboutPage() {
  return (
    <div className="flex h-[92vh] items-center justify-center">
      My nickname is Zero Programming. I am a full-stack developer.
      <div className="rounded-3xl  flex h-16 items-center justify-center">
        <SocialIcons fgColor="white" url="https://github.com/zeroprograming" />
        <SocialIcons
          fgColor="white"
          url="https://www.linkedin.com/in/zeroprograming/"
        />
      </div>
    </div>
  );
}

export default AboutPage;
