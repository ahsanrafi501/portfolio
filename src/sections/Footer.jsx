import { socialImgs } from "../constants/index.js";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    {/* আপনি চাইলে এই ব্লগ টেক্সটটিকেও লিংক বানিয়ে দিতে পারেন */}
                    <p className="cursor-pointer hover:underline">Blog</p>
                </div>
                <div className="socials flex gap-4">
                    {socialImgs.map((socialImg, index) => (
                        <div key={index} className="icon">
                            {/* এখানে <a> ট্যাগ যুক্ত করা হয়েছে */}
                            <a 
                                href={socialImg.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block transition-transform hover:scale-110"
                            >
                                <img src={socialImg.imgPath} alt={socialImg.name} />
                            </a>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Ahsan Habib. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;