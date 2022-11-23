import Head from 'next/head';
import Image from 'next/image';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Experience from '../components/Experience';
import Card from '../components/Card';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Matt Faucher | Portfolio</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-white sm:px-5 md:px-20 pb-10 dark:bg-gray-800 dark:text-white'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl'>Matt Faucher</h1>
          <ul className='flex items-center space-x-3'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-xl' onClick={() => setDarkMode(!darkMode)} />
            </li>
            <li>
              <a
                className='bg-blue-500 text-gray-200 px-4 py-2 rounded-md dark:text-white'
                href='https://github.com/mattfaucher/mattfaucher.github.io/tree/master/public/Resume.pdf' download='matt_faucher_resume.pdf' target='_blank' rel='noreferrer'>
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <section>
          <div className='text-center p-5'>
            <h2 className='text-5xl py-2 text-blue-500 font-medium'>Matt Faucher</h2>
            <h3 className='text-2xl py-2'>Software Engineer</h3>
            <p className='text-lg py-5 px-10 leading-6 text-gray-800 dark:text-white'>
              My name is Matthew Faucher. I am currently pursuing a master’s degree in Computer Science at <span className='text-red-500'>Northeastern University</span>.
              Software Engineering, Software Development and everything in between fall within my interests and desired career path.
              Through schooling and full-time co-op/intern positions, I have gained experience with back-end languages as well as full-stack web development.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 text-gray-600 p-8 dark:text-white'>
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
          <div className='relative mx-auto bg-gradient-to-t from-white to-blue-500 rounded-full w-80 h-80 m-5 overflow-hidden p-4'>
            <Image src='https://github.com/mattfaucher/mattfaucher.github.io/blob/master/img/MLAX_Headshot-removebg.png' alt='headshot image' style={{ position: 'relative', top: '-15px' }} />
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-4xl mb-5 text-center p-8'>
              Work Experience
            </h3>
            <Experience />
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-4xl mb-5 text-center'>
              Projects
            </h3>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 m-auto p-8 justify-center'>
              <Card
                title='nuHabit: Habit tracking made simple'
                content='Full stack web application written in JavaScript that is used for tracking habits. This app was created for a class project and includes a front-end, back-end, as well as a database via MongoDB.'
                url='https://github.com/mattfaucher/nuHabit/'
              />
              <Card
                title='Mini Shell'
                content='A shell written in C that can handle all standard linux commands as well as other custom created commands.'
                url='https://github.com/mattfaucher/mini-shell'
              />
              <Card
                title='Apex Rank Bot'
                content='Bot written for Discord Server. This bot was used to handle commands that users input and based on those commands automate administrative tasks within the server. Used Python.'
                url='https://github.com/mattfaucher/apex-rank-bot'
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
