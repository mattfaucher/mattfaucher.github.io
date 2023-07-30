import { Chrono } from "react-chrono";

function formatDate(date: string | null) {
    const options: any = {
        year: "numeric",
        month: "long",
    };
    if (date === null) return new Date().toLocaleDateString('en-US', options);
    return new Date(date).toLocaleDateString('en-US', options);
}

export default function ExperienceTimeline(props: { darkMode: boolean }) {
    const black = '#000';
    let cardBgColor = '#ffffff';
    const darkBlue = '#005c9d';
    const primeBlue = '#0980d3';
    const white = '#ffffff';

    return (
        <Chrono
            mode="VERTICAL_ALTERNATING"
            disableNavOnKey
            hideControls
            scrollable
            lineWidth={1}
            fontSizes={{
                cardTitle: '1.5rem',
                cardSubtitle: '1.25rem',
            }}
            theme={{
                primary: primeBlue,
                secondary: white,
                cardTitleColor: darkBlue,
                cardSubtitleColor: black,
                cardBgColor: cardBgColor,
                cardMediaBgColor: darkBlue,
                titleColor: '#5A5A5A',
            }}
            items={
                [
                    {
                        title: `${formatDate("2023-06-02")} to Present`,
                        cardTitle: "Amazon Web Services | Boston, MA",
                        url: "https://aws.amazon.com/",
                        cardSubtitle: "Software Engineer",
                        cardDetailedText:
                            "Full-time engineer working at EFS. Improving org-wide testing \
              through use of CDK to migrate microservices into an ephemeral testing environment.",
                        media: {
                            name: "aws gif",
                            source: {
                                url:
                                    "https://miro.medium.com/v2/resize:fit:1400/1*2-b5UkCIf7iF0eCTc-DFeQ.gif",
                            },
                            type: "IMAGE"
                        },
                    },
                    {
                        title: `${formatDate("2022-09-12")} to ${formatDate("2022-12-16")}`,
                        cardTitle: "Amazon Web Services | Boston, MA",
                        url: "https://aws.amazon.com/",
                        cardSubtitle: "Software Engineer Intern",
                        cardDetailedText:
                            "Intern at EFS. Focused on improving on-call operator workflows \
              by automating log querying and presenting known issues with relevant \
              information. Pushed for better org documentation practices and created \
              proof of concept statically hosted website for other engineers to \
              easily locate and read design documents.",
                        media: {
                            name: "aws gif",
                            source: {
                                url:
                                    "https://miro.medium.com/v2/resize:fit:1400/1*2-b5UkCIf7iF0eCTc-DFeQ.gif"
                            },
                            type: "IMAGE"
                        },
                    },
                    {
                        title: `${formatDate("2022-06-02")} to ${formatDate("2022-09-02")}`,
                        cardTitle: "Google Display & Video 360 | Kirkland, WA (Remote)",
                        url: "https://marketingplatform.google.com/about/display-video-360/",
                        cardSubtitle: "Software Engineer Intern",
                        cardDetailedText:
                            "Implemented a dashboard customization feature allowing users to\
              simplify and organize their ad campaign insights. Leveraged RPC\
              prefetching to load user data with zero percent increased in\
              page load time. Worked closely with UI/UX designer to ensure\
              seamless user experience and usability.",
                        media: {
                            name: "google gif",
                            source: {
                                url:
                                    "https://cdn.dribbble.com/users/1000629/screenshots/2907057/__logo__.gif"
                            },
                            type: "IMAGE"
                        },
                    },
                    {
                        title: `${formatDate("2022-01-02")} to ${formatDate("2022-05-02")}`,
                        cardTitle: "Khoury College of Computer Sciences at Northeastern University | Boston, MA",
                        url: "https://www.khoury.northeastern.edu/",
                        cardSubtitle: "Graduate Teaching Assistant",
                        cardDetailedText:
                            "",
                        media: {
                            name: "khoury image",
                            source: {
                                url:
                                    "https://assets.onthehub.com/attachments/15/1b5482e1-809b-e011-969d-0030487d8897/54b9bb2c-b8ac-4ba6-91cc-d6d855dae8dc.png"
                            },
                            type: "IMAGE"
                        },
                    },
                ]
            }
        />
    );
};
