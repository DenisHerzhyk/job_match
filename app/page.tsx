import UploadBox from "./components/UploadBox";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="mb-5 text-center">
          <h1 className="font-bold text-2xl underline decoration-blue-500">
            Upload your CV and paste a job posting.
          </h1>
          <p className="text-gray-200">
            The app gives a match score, lists the skills you’re missing, and
            drafts a cover letter.
          </p>
        </div>
        <UploadBox />
      </div>
    </>
  );
}
