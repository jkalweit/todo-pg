
namespace Utils {

	export function toArray<T>(obj: { [key: string]: T }, sortField: string = 'key', ignoreProps: string[] = ['lastModified']) {
		var array: T[] = [];

		if (obj && typeof obj === 'object') {
			Object.keys(obj).forEach((key: string) => {
				if (ignoreProps.indexOf(key) === -1) {
					array.push(obj[key]);
				}
			});

			if(sortField) {
				array.sort((a: T, b: T): number => {
					if((a as any)[sortField] < (b as any)[sortField]) return -1;
					if((a as any)[sortField] > (b as any)[sortField]) return 1;
					return 0;
				});
			}
		}

		return array;
	}

	export function formatCurrency(value: any, precision: number = 2): string {
		var number = (typeof value === 'string') ? parseInt(value) : value as number;
		return number.toFixed(precision);
	}
	export function roundToTwo(num: number) {
		return +(Math.round((num.toString() + 'e+2') as any)  + "e-2");
	}

	export function snapToGrid(val: number, grid: number) {
		var offset = val % grid;
		if (offset < (grid / 2))
			return val - offset;
		else
			return val + (grid - offset);
	}

	export function arrayContains(list: string[], value: string)
	{
		for( var i = 0; i < list.length; ++i )
		{
			if(list[i] === value) return true;
		}

		return false;
	}}
