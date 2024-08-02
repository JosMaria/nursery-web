import { CLASSIFICATIONS, STATES } from '@nursery/constants/commons';
import { traduceClassification, traduceStatus } from '@nursery/utils';

export const Filter = () => {
  return (
    <div className='sticky top-0 max-w-xs w-full h-fit flex justify-center'>
      <form className='mx-5 w-full flex flex-col gap-5'>
        <div>
          <h2 className='font-semibold text-xl mb-1'>Clasificaci&oacute;n</h2>
          <div className='flex flex-col gap-0.5'>
            {CLASSIFICATIONS.map(classification => (
              <label className='flex items-center gap-2' key={classification}>
                <input type='checkbox' id={classification} name='options' value={classification} />
                <p className='first-letter:capitalize'>{traduceClassification(classification)}</p>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h2 className='font-semibold text-xl mb-1'>Estados</h2>
          <div className='flex flex-col gap-0.5'>
            {STATES.map(status => (
              <label className='flex items-center gap-2' key={status}>
                <input type='radio' name='status' value={status} />
                <p className='first-letter:capitalize'>{traduceStatus(status)}</p>
              </label>
            ))}
          </div>
        </div>
      </form>
    </div>

  );
}