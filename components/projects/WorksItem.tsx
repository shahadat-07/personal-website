import Image from 'next/image'
import Tech from './Tech'
import Icon from '../../public/static/assets/right-arrow-alt-regular-24.png'

const WorksItems = ({ item }) => {
  return (
    <div
      className="work__card dark:border dark:border-gray-700 relative hover:cursor-pointer hover:scale-105 transition duration-500"
      key={item.id}
    >
      <Image src={item.image} alt="" className="work__img" />
      <h3 className="mt-5">{item.title}</h3>
      <div className="flex justify-between mt-4">
        <a href={item.github} target="_blank" rel="noreferrer" className="work__button">
          GitHub{' '}
          <Image src={Icon} width={18} height={18} alt="icon" className="work__button-icon" />
        </a>
        <a href={item.live} target="_blank" rel="noreferrer" className="work__button">
          View Site{' '}
          <Image src={Icon} width={18} height={18} alt="icon" className="work__button-icon" />
        </a>
      </div>

      <div className="flex mt-10 gap-2">
        {item.technology.map((item, index) => (
          <Tech key={index} text={item}></Tech>
        ))}
      </div>
      {item.tag && (
        <div className="mt-4 flex justify-between">
          {item.tag.map((tag, index) => (
            <div
              key={index}
              className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 capitalize"
            >
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default WorksItems
