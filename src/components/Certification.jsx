import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certification } from "../constants";

const FeedbackCard = ({ index, college, degree, year, details }) => (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[800px] w-full"
    >
      <div className="mt-1">
      <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">{college}</p>
            <p className="mt-1 text-secondary text-[12px]">{year}</p>
          </div>
       
        <div className="mt-7 flex justify-between items-center gap-1">
        <p className="text-white tracking-wider text-[18px]">{degree}</p>
        </div>
        <ul className="mt-4 text-white text-[14px]">
          {details.map((detail, detailIndex) => (
            <li key={detailIndex} className="list-disc list-inside">
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

const Certification = () => {
  return (
    <>
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div
          className={`${styles.padding} bg-tertiary rounded-2xl min-h-[250px]`}
        >
          <motion.div variants={textVariant()}>
            <h5 className={`${styles.sectionHeadText}`}>
              Certification
            </h5>
          </motion.div>
        </div>
        <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
          {certification.map((certification, index) => (
            <FeedbackCard
              key={certification.name}
              index={index}
              {...certification}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Certification, "");