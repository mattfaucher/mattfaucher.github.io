export default function Card({ title, content, url }: { title: string, content: string, url: string }) {
    return (
        <div className='w-[100%] p-4 mx-10 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700'>
            <div className='flex flex-col mb-2 space-y-2'>
                <a href={url} target='_blank' rel='noreferrer'>
                    <button className='bg-transparent hover:bg-blue-500 text-blue-600 font-semibold hover:text-white py-.5 px-2 border border-blue-500 hover:border-transparent rounded'>
                        Code
                    </button>
                </a>
                <h5 className='mb-2 md:text-2xl sm:text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-md'>
                    {title}
                </h5>
                <hr className='bg-blue-500' />
            </div>
            <p className='max-w-80 h-auto mb-3 font-normal text-gray-700 dark:text-gray-400'>
                {content}
            </p>
        </div>
    );
}
