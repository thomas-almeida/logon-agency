export default function Enterprises() {
    const enterprises = [
        { name: "Facebook", src: "/facebook.svg" },
        { name: "Disney", src: "/disney.svg" },
        { name: "Airbnb", src: "/airbnb.svg" },
        { name: "Apple", src: "/apple.svg" },
        { name: "Spark", src: "/spark.svg" },
        { name: "Samsung", src: "/samsung.svg" },
        { name: "Quora", src: "/quora.svg" },
        { name: "Sass", src: "/sass.svg" },
    ];

    const EnterprisesList = () => (
        <ul 
            className="flex items-center justify-center md:justify-start [&_li]:mx-4 md:[&_li]:mx-8 [&_img]:max-w-none my-4 md:my-6"
            style={{ animation: "infinite-scroll 25s linear infinite" }}
        >
            {enterprises.map((enterprise) => (
                <li key={enterprise.name}>
                    <img src={enterprise.src} alt={enterprise.name} className="w-20" />
                </li>
            ))}
        </ul>
    );

    return (
        <div className="w-full overflow-hidden inline-flex flex-nowrap mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-200px),transparent_100%)]">
            <div className="inline-flex flex-nowrap w-full">
                <EnterprisesList />
                <EnterprisesList aria-hidden="true" />
            </div>
        </div>
    );
}