export default class TapHelper {
	
	static joinStyleClasses(baseClasses, newClass, condition) {
		if (condition) {
			baseClasses.push(newClass);
		}
		return baseClasses.join(" ");
	}

}