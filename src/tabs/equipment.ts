/*
  Functions used exclusively on the Equipment tab
*/
import HeroData from '../types/ActorData.js'
import { Constants } from '../constants.js'
import { DataTab } from '../types/DataTab.js'
import { DataError } from '../types/DataError.js'
import { Step, StepEnum } from '../types/Step.js'

class _Equipment extends Step implements DataTab {
	setListeners(): void { }

	getErrors(): DataError[] {
		const errors: DataError[] = [];
		if (false) {
			errors.push(this.error("HCT.Err.Key"));
		}
		return errors;
	}

	saveData(newActor: HeroData): void {
		console.log(`${Constants.LOG_PREFIX} | Saving Equipment Tab data into actor`);

		// TBD
	}
}
const EquipmentTab: DataTab = new _Equipment(StepEnum.Equipment);
export default EquipmentTab;
