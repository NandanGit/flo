/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * This script is used to generate React icons (.tsx) from the already existing React icons (.tsx) by modifying some things.
 * Path to the source icons will come from -i or --input flag.
 * Path to the destination icons will come from -o or --output flag.
 * In the input directory, only the files ending with .tsx are considered as icons.
 * Below is an example input file.
```
import React from 'react';

const AnonymousIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width={24}
		height={24}
		color={'#000000'}
		fill={'none'}
		{...props}
	>
		<path
			d='M7 15C5.34315 15 4 16.3431 4 18C4 19.6569 5.34315 21 7 21C8.65685 21 10 19.6569 10 18C10 16.3431 8.65685 15 7 15Z'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M17 15C15.3431 15 14 16.3431 14 18C14 19.6569 15.3431 21 17 21C18.6569 21 20 19.6569 20 18C20 16.3431 18.6569 15 17 15Z'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 17H10'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M22 13C19.5434 11.7725 15.9734 11 12 11C8.02658 11 4.45659 11.7725 2 13'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M19 11.5L17.9425 4.71245C17.7268 3.3282 16.2232 2.57812 15.0093 3.24919L14.3943 3.58915C12.9019 4.41412 11.0981 4.41412 9.60574 3.58915L8.99074 3.24919C7.77676 2.57812 6.27318 3.3282 6.05751 4.71246L5 11.5'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

export default AnonymousIcon;
```
 * For each icon in input dir, we will create a new file in the output dir. The name of the file will be the name of the exported icon in kebab case (assume kebabCase function is readily available).
  * We get the width and the height through -w and -h or --width and --height flags. If the width and height are not provided, we will use 24 as the default width and height.
  * If -w and -h are not provided, we will use -s or --size flag to set the width and height. If -s or --size flag is also not provided, we will use 24 as the default width and height.
  * We get the fill through -f or --fill flag. If the fill is not provided, we will use none as the default fill.
  * We get the color through -c or --color flag. If the color is not provided, we will use #ffffff as the default color.
  * We get the stroke width through --stroke-width flag. If the stroke width is not provided, we will use 1.5 as the default stroke width.
  * We get the stroke linecap through --stroke-linecap flag. If the stroke linecap is not provided, we will use round as the default stroke linecap.
  * We get the stroke linejoin through --stroke-linejoin flag. If the stroke linejoin is not provided, we will use round as the default stroke linejoin.
  * We get the stroke through --stroke flag. If the stroke is not provided, we will use currentColor as the default stroke.
 */
// import fs from 'fs';
// import path from 'path';
// import { pascalToKebabCase } from './utils/string';

const fs = require('fs');
const path = require('path');
const { kebabToPascalCase, kebabToSnakeCase } = require('./utils/string');
const { parseArgs } = require('./utils/args');

const args = parseArgs(process.argv.slice(2));
console.log(args);

const inputDir = path.join(
	__dirname,
	args.i || args.input || 'resources/hugeicons'
);
const outputDir = path.join(__dirname, args.o || args.output || 'dist');

const width = args.w || args.width || args.s || args.size || args.h || 24;
const height = args.h || args.height || args.s || args.size || args.w || 24;

const fill = args.f || args.fill || 'none'; // none or any color
const color = args.c || args.color || '#ffffff'; // any color
const strokeWidth = parseFloat(args['stroke-width']) || 1.5; // any number
const strokeLinecap = args['stroke-linecap'] || 'round'; // round or square or butt
const strokeLinejoin = args['stroke-linejoin'] || 'round'; // round or bevel or miter
const stroke = args.stroke || 'currentColor'; // any color

const iconsName = args['icons-name'] || 'HUGEICONS';

const files = fs.readdirSync(inputDir);

if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir, { recursive: true });
}

let exportsTemplate = '';
let iconLiteralsTemplate = `export const ${iconsName} = [\n`;

files.forEach((file: string) => {
	if (file.endsWith('.tsx')) {
		const filePath = path.join(inputDir, file);
		const content = fs.readFileSync(filePath, 'utf-8');
		const fileName = file.replace('-stroke-rounded.tsx', '');
		const pascalCaseName = kebabToPascalCase(fileName);
		const snakeCaseName = kebabToSnakeCase(fileName);
		// console.log(pascalCaseName, snakeCaseName.toUpperCase());
		exportsTemplate += `export { default as ${pascalCaseName}Icon } from './${fileName}';\n`;
		iconLiteralsTemplate += `  '${snakeCaseName.toUpperCase()}',\n`;
		const newContent = content
			.replace(/viewBox=(["'])0 0 24 24\1/g, `viewBox="0 0 ${width} ${height}"`)
			.replace(/width=\{24\}/g, `width={${width}}`)
			.replace(/height=\{24\}/g, `height={${height}}`)
			.replace(/fill=(["'])none\1/g, `fill={'${fill}'}`)
			.replace(/color=(["'])#000000\1/g, `color={'${color}'}`)
			.replace(
				/strokeWidth=(["'])1.5\1/g,
				`strokeWidth={props.strokeWidth || "${strokeWidth}"}`
			)
			.replace(
				/strokeLinecap=(["'])round\1/g,
				`strokeLinecap={props.strokeLinecap || "${strokeLinecap}"}`
			)
			.replace(
				/strokeLinejoin=(["'])round\1/g,
				`strokeLinejoin={props.strokeLinejoin || "${strokeLinejoin}"}`
			)
			.replace(
				/stroke=(["'])currentColor\1/g,
				`stroke={props.stroke || "${stroke}"}`
			);

		fs.writeFileSync(path.join(outputDir, `${fileName}.tsx`), newContent);
	}
});
iconLiteralsTemplate += '] as const;\n';

const iconsLiteralsDir = path.join(outputDir, '../constants');
if (!fs.existsSync(iconsLiteralsDir)) {
	fs.mkdirSync(iconsLiteralsDir, { recursive: true });
}

const iconsLiteralsFile = path.join(
	iconsLiteralsDir,
	`${iconsName.toLowerCase()}.ts`
);
console.log(iconsLiteralsFile);
fs.writeFileSync(iconsLiteralsFile, iconLiteralsTemplate);

fs.writeFileSync(path.join(outputDir, 'index.ts'), exportsTemplate);

console.log('All icons have been generated successfully');
