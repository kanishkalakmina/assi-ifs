export const isPalindrome = (str: string): boolean => {
    const cleanStr = str.toLowerCase().replace(/\s/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
  }

export const flattenArray = <T>(arr: (T | T[])[]): T[] => {
    return arr.reduce<T[]>((acc, val) => 
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []
    );
  };
  
export const deepClone = <T>(obj: T): T => {
    // If the value is not an object or is null, return it (base case for recursion)
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    // If the value is an array, clone each element recursively
    if (Array.isArray(obj)) {
      return obj.map(item => deepClone(item)) as unknown as T;
    }
  
    // If the value is an object, create a new object and clone each property recursively
    const clonedObj: Record<string, unknown> = {};
    for (const key in obj) {
      clonedObj[key] = deepClone(obj[key as keyof T]);
    }
    return clonedObj as T;
  };
