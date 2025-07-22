import Image from "next/image";

export default function Education() {
return (
<section className="py-10 px-4">

    <div className="max-w-4xl mx-auto flex flex-col gap-6 items-center text-gray-800">
    <p className="text-lg text-center leading-relaxed">
        Bachelor's Degree in Computer Science, graduated 2025 from{" "}
        <span className="font-semibold">
        Faculty of Computers and Information, Asyut University
        </span>
    </p>

    <p className="text-lg font-medium">GPA: <span className="font-semibold text-orange-800">3.18</span></p>

    <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 shadow-md rounded-lg p-6 w-full md:w-auto">
        <div>
        <p className="text-lg font-semibold mb-2">Node.js Course with Mahara Tech</p>
        <Image
            src="/assets/images/certificate.jpg"
            alt="Node.js Certificate"
            width={200}
            height={200}
            className="rounded-md shadow-lg object-cover"
        />
        </div>
    </div>
    </div>
</section>
);
}
