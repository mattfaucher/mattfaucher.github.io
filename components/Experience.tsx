import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaAws } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { TbLetterN, TbLetterT } from 'react-icons/tb';

export default function Experience() {
  const black = '#000';
  const cardBgColor = '#6495ED';
  const awsColor = '#ff9900';
  const efsColor = '#60933D'
  const googleGreen = '#34a853';
  const neuRed = '#e50000';
  const teradyneBlue = '#04d9ff';
  const dateDark = 'dark:text-white'

  return (
    <VerticalTimeline
      animate={true}
      lineColor='#e0e0e0'
    >
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: cardBgColor, color: black }}
        contentArrowStyle={{ borderRight: `7px solid ${cardBgColor}` }}
        date='June 2023 - Present'
        dateClassName={dateDark}
        iconStyle={{ background: efsColor, color: black }}
        icon={<a href='https://aws.amazon.com/efs' target='_blank' rel='noreferrer'><FaAws /></a>}
      >
        <h2>Amazon Web Services</h2>
        <h3 className='vertical-timeline-element-title'>Software Development Engineer</h3>
        <h4 className='vertical-timeline-element-subtitle'>Boston, MA</h4>
        <p className='text-gray-200'>CloudFormation, Mircoservices, Lambda, Python, CDK, CI/CD, Cloud Development</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: cardBgColor, color: black }}
        contentArrowStyle={{ borderRight: `7px solid ${cardBgColor}` }}
        date='September 2022 - December 2022'
        dateClassName={dateDark}
        iconStyle={{ background: awsColor, color: black }}
        icon={<a href='https://aws.amazon.com/efs' target='_blank' rel='noreferrer'><FaAws /></a>}
      >
        <h2>Amazon Web Services</h2>
        <h3 className='vertical-timeline-element-title'>Software Development Engineer Intern</h3>
        <h4 className='vertical-timeline-element-subtitle'>Boston, MA</h4>
        <p className='text-gray-200'>Lambda, Python, CDK, CI/CD, Cloud Development</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: cardBgColor, color: black }}
        contentArrowStyle={{ borderRight: `7px solid ${cardBgColor}` }}
        date='June 2022 - September 2022'
        dateClassName={dateDark}
        iconStyle={{ background: googleGreen, color: black }}
        icon={<a href='https://marketingplatform.google.com/about/display-video-360/' target='_blank' rel='noreferrer'><AiFillGoogleCircle /></a>}
      >
        <h2>Google Display & Video 360</h2>
        <h3 className='vertical-timeline-element-title'>Software Engineering Intern</h3>
        <h4 className='vertical-timeline-element-subtitle'>Kirkland, WA (Remote)</h4>
        <p className='text-gray-200'>Angular, Dart, Java, Web Development</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: cardBgColor, color: black }}
        contentArrowStyle={{ borderRight: `7px solid ${cardBgColor}` }}
        date='January 2022 - May 2022'
        dateClassName={dateDark}
        iconStyle={{ background: neuRed, color: black }}
        icon={<a href='https://www.khoury.northeastern.edu' target='_blank' rel='noreferrer'><TbLetterN /></a>}
      >
        <h2>Khoury College of Computer Sciences</h2>
        <h3 className='vertical-timeline-element-title'>Graduate Teaching Assistant</h3>
        <h4 className='vertical-timeline-element-subtitle'>Boston, MA</h4>
        <p className='text-gray-200'>Object Oriented Design, Java, Teaching, Mentoring</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: cardBgColor, color: black }}
        contentArrowStyle={{ borderRight: `7px solid ${cardBgColor}` }}
        date='August 2021 - December 2021'
        dateClassName={dateDark}
        iconStyle={{ background: teradyneBlue, color: black }}
        icon={<a href='https://www.teradyne.com' target='_blank' rel='noreferrer'><TbLetterT /></a>}
      >
        <h2>Teradyne, Inc.</h2>
        <h3 className='vertical-timeline-element-title'>Software Engineering Intern</h3>
        <h4 className='vertical-timeline-element-subtitle'>North Reading, MA</h4>
        <p className='text-gray-200'>Python, Automation, Desktop App Development</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
