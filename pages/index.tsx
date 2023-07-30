import Head from 'next/head';
import Image from 'next/image';
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import ExperienceTimeline from '../components/ExperienceTimeline';
import Projects from '../components/Projects';
import { useState } from 'react';
import FancyListItem from '../components/FancyListItem';

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`${darkMode ? 'dark' : ''} bg-white`}>
            <Head>
                <title>Matt Faucher | Software Engineer</title>
                <meta name='viewport' content='width=device-width, initial-scale=1.0' charSet='utf-8' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className='sm:px-5 md:px-20 pb-10 dark:bg-gray-800 dark:text-white'>
                <nav className='flex sm:flex-row flex-col items-center sm:justify-between p-4'>
                    <div>
                        <h2 className='text-3xl text-blue-500 font-medium drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.75)]'>Matt Faucher</h2>
                        <h3 className='text-xl text-gray-500 dark:text-white drop-shadow-[0_1.2px_2.2px_rgba(0,0,0,0.6)]'>Software Engineer</h3>
                    </div>
                    <div className='text-5xl flex justify-center md:gap-16 gap-4 text-blue-500 p-8 dark:text-white'>
                        <a
                            href='https://twitter.com/mfauch_dev'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <AiFillTwitterCircle />
                        </a>
                        <a
                            href='https://linkedin.com/in/matthew-faucher/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <AiFillLinkedin />
                        </a>
                        <a
                            href='https://github.com/mattfaucher'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <AiFillGithub />
                        </a>
                    </div>
                    <div className='flex flex-wrap items-center justify-between space-x-4'>
                        <a
                            className='flex items-center bg-blue-500 text-gray-300 px-4 py-2 rounded-md dark:text-white drop-shadow-[0_1.2px_2.2px_rgba(0,0,0,0.6)]'
                            href='https://github.com/mattfaucher/mattfaucher.github.io/tree/master/public/Resume.pdf' download='matt_faucher_resume.pdf' target='_blank' rel='noreferrer'>
                            Resume
                        </a>
                        <button className='inline-flex items-center justify-center bg-blue-500 text-gray-300 px-4 py-2 rounded-md dark:text-white shadow-black drop-shadow-[0_1.2px_2.2px_rgba(0,0,0,0.6)]'>
                            {darkMode ?
                                <BsFillMoonStarsFill className='cursor-pointer text-xl' onClick={() => setDarkMode(!darkMode)} />
                                :
                                <BsSun
                                    className='cursor-pointer text-xl' onClick={() =>
                                        setDarkMode(!darkMode)} />
                            }
                        </button>
                    </div>
                </nav>
                <div className='mt-50'>
                    <section className='lg:py-5'>
                        <div className='text-center p-5'>
                            <p className='text-lg py-5 px-10 leading-6 text-gray-800 dark:text-white'>
                                Hello 😄, my name is Matt and I am currently working as a software engineer at <span className='text-amber-500'>Amazon Web Services</span> for the <span className='text-lime-600'>Elastic File System</span> service.
                                My team is building a general purpose all-in-one testing infrastructure to increase development velocity among the engineering cohorts.
                                <br />
                                <br />
                                I am personally ⚡️<span className='font-semibold'>invigorated</span>⚡️by creating products that provide exceptional experiences to users as well as other developers.
                            </p>
                            <h3 className='text-2xl py-2 mb-2'>My passions include</h3>
                            <ul className='table mx-auto text-start whitespace-nowrap'>
                                <FancyListItem darkMode={darkMode} text='front end development' />
                                <FancyListItem darkMode={darkMode} text='back end development' />
                                <FancyListItem darkMode={darkMode} text='product development' />
                                <FancyListItem darkMode={darkMode} text='computer science theory' />
                                <FancyListItem darkMode={darkMode} text='algorithms' />
                            </ul>
                        </div>

                        <div className='relative mx-auto bg-gradient-to-t from-white to-blue-500 rounded-full w-80 h-80 m-5 overflow-hidden p-4'>
                            <Image src='https://raw.githubusercontent.com/mattfaucher/mattfaucher.github.io/master/img/MLAX_Headshot-removebg.png' alt='headshot image' style={{ position: 'relative', top: '-15px' }} width={320} height={320} />
                        </div>
                    </section>

                    <section>
                        <div>
                            <h3 className='text-4xl mb-5 text-center p-8'>
                                Work Experience
                            </h3>
                            <ExperienceTimeline darkMode={darkMode} />
                        </div>
                    </section>

                    <section>
                        <h3 className='text-4xl mb-5 text-center'>
                            Projects
                        </h3>
                        <Projects />
                    </section>
                </div>
            </main>
        </div>
    );
}
