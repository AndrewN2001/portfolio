import React from "react";
import { IoClose } from "react-icons/io5";
import { SiTensorflow, SiPython, SiKeras, SiGithub, SiMongodb, SiExpress, SiReact, SiNodedotjs, SiAwsamplify, SiAmazonec2, SiAmazonrds, SiMysql } from "react-icons/si";

export default function ProjectInfo({selectedProject, setSelectedProject}){
    return(
        <div className="relative">
            {selectedProject === "first" && (
                <div className="inset-0 bg-black bg-opacity-50 z-10 fixed flex justify-center items-center font-satoshi">
                    <div className="bg-[#E7D3AB] text-[#333335]">
                        <button onClick={() => setSelectedProject("")} className="pl-2 pt-2 text-3xl">
                            <IoClose />
                        </button>

                        <div className="px-8 pb-5 mb-6 flex flex-col gap-3 w-[45rem]">
                            <div id="summary">
                                <h1 className="text-3xl w-full font-bold italic border-b border-[#333335]">Summary</h1>
                                <p className="text-lg mt-4">
                                    TopShape is an Health and Fitness application that is designed to assist people reach their fitness and health goals. This project will showcase my newfound knowledge on cloud computing and full-stack development, with a focus on AWS, specifically working with AWS Amplify, AWS RDS and AWS EC2.
                                </p>
                            </div>

                            <div id="objective">
                                <h1 className="text-3xl w-full font-bold italic border-b border-[#333335]">Objectives</h1>
                                <p className="text-lg mt-4">
                                    As the lead developer for TopShape, a fitness and nutrition tracking application, I guided the development of key features like personalized workout plans, nutrition tracking, and progress visualization. I utilized React for the front-end, while using Express.js, MongoDB, and MySQL for the back-end. My focus was on creating a seamless user experience while ensuring the project followed Agile development practices for iterative improvements and collaboration.<br/>
                                    <br/>I plan to integrate AWS Amplify, AWS RDS, and AWS EC2 to build a scalable and efficient infrastructure. AWS Amplify will simplify front-end and back-end integration, while AWS RDS will provide reliable database management for user data. The application will be deployed using AWS EC2 to ensure scalable hosting and optimal performance. This planned integration offers a great opportunity to learn and apply cloud technologies in practice.
                                </p>
                            </div>
                                
                            <div id="technologies">
                                <h1 className="text-3xl w-full font-bold italic border-b border-[#333335]">Technologies</h1>
                                <ul className="mt-4 flex gap-3 flex-wrap">
                                    <li className="flex items-center gap-2 bg-[#333335] text-[#E7D3AB] w-fit p-2"><SiMongodb/>MongoDB</li>
                                    <li className="flex items-center gap-2 bg-[#333335] text-[#E7D3AB] w-fit p-2"><SiExpress/>Express.js</li>
                                    <li className="flex items-center gap-2 bg-[#333335] text-[#E7D3AB] w-fit p-2"><SiReact/>React.js</li>
                                    <li className="flex items-center gap-2 bg-[#333335] text-[#E7D3AB] w-fit p-2"><SiNodedotjs/>Node.js</li>
                                    <li className="flex items-center gap-2 bg-[#333335] text-[#E7D3AB] w-fit p-2"><SiMysql/>MySQL</li>
                                    <li className="flex items-center gap-2 bg-[#333335] text-[#E7D3AB] w-fit text-nowrap p-2"><SiAwsamplify/>AWS Amplify</li>
                                    <li className="flex items-center gap-2 bg-[#333335] text-[#E7D3AB] w-fit text-nowrap p-2"><SiAmazonec2/>Amazon EC2</li>
                                    <li className="flex items-center gap-2 bg-[#333335] text-[#E7D3AB] w-fit text-nowrap p-2"><SiAmazonrds/>Amazon RDS</li>
                                </ul>
                            </div>

                            <div id="links">
                                <h1 className="text-3xl w-full font-bold italic border-b border-[#333335]">Links</h1>
                                <ul className="mt-4 flex gap-3">
                                    <li>
                                        <a href="https://github.com/AndrewN2001/Voluntify" target="_blank" className="flex items-center gap-2 bg-[#4078C0] text-[#E7D3AB] w-fit p-2">
                                            <SiGithub/> Github
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {selectedProject === "second" && (
                <div className="inset-0 bg-black bg-opacity-50 z-10 fixed flex justify-center items-center font-satoshi">
                    <div className="bg-[#E7D3AB] text-[#333335]">
                        <button onClick={() => setSelectedProject("")} className="pl-2 pt-2 text-3xl">
                            <IoClose />
                        </button>

                        <div className="px-8 pb-5 mb-6 flex flex-col gap-3 w-[45rem]">
                            <div id="summary">
                                <h1 className="text-3xl w-full font-bold italic border-b border-[#333335]">Summary</h1>
                                <p className="text-lg mt-4">
                                    Voluntify is a full-stack web application designed to connect volunteers with community events. It enables users to track their participation history, discover upcoming events, and receive personalized recommendations based on their interests. Administrators can create and manage events through an intuitive interface. This project, developed as part of COSC 4353 (Software Design), aimed to foster community engagement and streamline volunteer coordination.
                                </p>
                            </div>

                            <div id="objective">
                                <h1 className="text-3xl w-full font-bold italic border-b border-[#333335]">Objectives</h1>
                                <p className="text-lg mt-4">
                                    As team lead and developer, I guided a team of two in building Voluntify from the ground up. I contributed to designing and implementing RESTful APIs, managing the backend with MongoDB, and creating a responsive front-end using React and TailwindCSS. I also ensured the project adhered to Agile development practices, promoting iterative improvements and effective collaboration. My work focused on developing user authentication, event tracking, and personalized recommendation features.
                                </p>
                            </div>
                                
                            <div id="technologies">
                                <h1 className="text-3xl w-full font-bold italic border-b border-[#333335]">Technologies</h1>
                                <ul className="mt-4 flex gap-3">
                                    <li className="flex items-center gap-2 bg-[#333335] text-[#E7D3AB] w-fit p-2"><SiMongodb/>MongoDB</li>
                                    <li className="flex items-center gap-2 bg-[#333335] text-[#E7D3AB] w-fit p-2"><SiExpress/>Express.js</li>
                                    <li className="flex items-center gap-2 bg-[#333335] text-[#E7D3AB] w-fit p-2"><SiReact/>React.js</li>
                                    <li className="flex items-center gap-2 bg-[#333335] text-[#E7D3AB] w-fit p-2"><SiNodedotjs/>Node.js</li>
                                </ul>
                            </div>

                            <div id="links">
                                <h1 className="text-3xl w-full font-bold italic border-b border-[#333335]">Links</h1>
                                <ul className="mt-4 flex gap-3">
                                    <li>
                                        <a href="https://github.com/AndrewN2001/Voluntify" target="_blank" className="flex items-center gap-2 bg-[#4078C0] text-[#E7D3AB] w-fit p-2">
                                            <SiGithub/> Github
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {selectedProject === "third" && (
                <div className="inset-0 bg-black bg-opacity-50 z-10 fixed flex justify-center items-center font-satoshi">
                    <div className="bg-[#E7D3AB] text-[#333335]">
                        <button onClick={() => setSelectedProject("")} className="pl-2 pt-2 text-3xl">
                            <IoClose />
                        </button>
                        
                        <div className="px-8 pb-5 mb-6 flex flex-col gap-3 w-[45rem]">
                            <div id="summary">
                                <h1 className="text-3xl w-full font-bold italic border-b border-[#333335]">Summary</h1>
                                <p className="text-lg mt-4">
                                    This Military Aircraft Detection Project is a deep-learning based model which was designed to identify and classify 73 types of military aircraft. This project uses Convolutional Neural Networks (CNNs) on a large dataset of over 60,000 images to analyze image data and make accurate predictions about the type of aircraft. Through extensive data preprocessing and tuning the models, a robust model was achieved that could effectively identify military aircraft in a variety of real-life scenarios.
                                </p>
                            </div>

                            <div id="objective">
                                <h1 className="text-3xl w-full font-bold italic border-b border-[#333335]">Objectives</h1>
                                <p className="text-lg mt-4">
                                    The objective for this project was to create a highly accurate and efficient model capable of identifying different military aircraft types based on image data. This project aimed to:
                                    <ul className="list-disc pl-10 mt-3">
                                        <li>Preprocess and clean a large-scale dataset of military aircraft images.</li>
                                        <li>Train a CNN model using different architectures for comparison (ResNet50 and EfficientNetV2-B0).</li>
                                        <li>Achieve high classification accuracy for 73 different aircraft types.</li>
                                    </ul>
                                    <h1 className="mt-3">Through extensive training, we were able to achieve exceptional results, with ResNet50 achieving a 99.3% training accuracy and 91% validation accuracy, and a 94.3% training accuracy and 93.1% validation accuracy for EfficientNetV2-B0.</h1>
                                </p>
                            </div>
                                
                            <div id="technologies">
                                <h1 className="text-3xl w-full font-bold italic border-b border-[#333335]">Technologies</h1>
                                <ul className="mt-4 flex gap-3">
                                    <li className="flex items-center gap-2 bg-[#333335] text-[#E7D3AB] w-fit p-2"><SiPython/>Python</li>
                                    <li className="flex items-center gap-2 bg-[#333335] text-[#E7D3AB] w-fit p-2"><SiTensorflow/>TensorFlow</li>
                                    <li className="flex items-center gap-2 bg-[#333335] text-[#E7D3AB] w-fit p-2"><SiKeras/>Keras</li>
                                </ul>
                            </div>

                            <div id="links">
                                <h1 className="text-3xl w-full font-bold italic border-b border-[#333335]">Links</h1>
                                <ul className="mt-4 flex gap-3">
                                    <li>
                                        <a href="https://github.com/AndrewN2001/MilitaryAirplaneDetectionProject" target="_blank" className="flex items-center gap-2 bg-[#4078C0] text-[#E7D3AB] w-fit p-2">
                                            <SiGithub/> Github
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ProjectPoster.pdf" className="flex items-center gap-2 bg-[#333335] text-[#E7D3AB] w-fit p-2" target="_blank" download>
                                            Project Poster
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}