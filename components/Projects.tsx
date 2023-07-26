import Card from '../components/Card';

export default function Projects() {
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-1 m-auto p-8 justify-center'>
      <Card
        title='Neovim Configuration'
        content='Handmade customized Neovim configuration. Personalized to include the keymaps and tools that help me be productive!'
        url='https://github.com/mattfaucher/nvim'
      />
      <Card
        title='Content Delivery Network'
        content='CDN written in Python, using a DNS server to route users to the nearest HTTP replica server. HTTP server was written utilizing an LRU cache to optimize the most accessed content from the server. Geographical calculations were performed to in order to find the nearest origin server to the requester for fastest response time.'
        url='https://github.com/sagrawal8/CDN'
      />
      <Card
        title='Web Scraper for Finding Flag'
        content='Web scraper written using Python that was used to find hidden flags in a fake social media website. The scraper manages to store session information in order to continuously make reqeusts to the web server. The algorithm used to find the hidden secret flags was a breadth-first search in combination with regular expressions used to parse the HTML content.'
        url='https://github.com/ayushdj/WebScraper'
      />
      <Card
        title='nuHabit: Habit tracking made simple'
        content='Full stack web application written using React, MongoDB, Express, and Node. The goal of the application is to enable users to track their forming or breaking of habits.'
        url='https://github.com/mattfaucher/nuHabit/'
      />
      <Card
        title='Mini Shell'
        content='A shell written in C that can handle all standard linux commands as well as other custom created commands.'
        url='https://github.com/mattfaucher/mini-shell'
      />
    </div>
  );
}
