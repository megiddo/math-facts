import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'ninja.mathfacts',
	appName: 'Math Facts',
	webDir: 'build',
	bundledWebRuntime: false,
	ios: {
		scheme: 'Math Facts'
	}
};

export default config;
