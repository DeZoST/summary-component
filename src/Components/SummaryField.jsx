// eslint-disable-next-line react/prop-types
export default function SummaryField({ category,score,icon,textColor,bgColor }) {
  return (
    <li className={`flex items-center justify-between p-3 rounded-md ${bgColor}`}>
      <div className="flex items-center">
        <img className="inline-block" src={icon} alt={category} />
        <h3 className={`inline-block mx-2 font-bold ${textColor}`}>{category}</h3>
      </div>

      <p className="">
        <span className="font-bold text-dark-gray-blue">{score}</span> / 100
      </p>
    </li>
  );
}
