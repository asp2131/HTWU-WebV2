import React from "react";
import { PlusIcon } from "@heroicons/react/outline";
export const LessonMaterials = (props) => {
  const { edit } = props;
  return (
    <div className="lesson-materials flex justify-center">
      <div className="inline-block bg-[#f4f6fe] mt-8 px-8 py-6 rounded-xl max-w-[72%]">
        {edit ? (
          <div className="flex justify-end w-full mb-12">
            <button className="btn btn-green px-4 inline-flex items-center h-10">
              <PlusIcon className="h-5 w-5 mr-2" />
              Add material
            </button>
          </div>
        ) : null}
        <img src="images/materials.png" alt="materials" />
      </div>
    </div>
  );
};
