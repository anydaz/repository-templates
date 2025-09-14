import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import sonarjs from 'eslint-plugin-sonarjs';
import typescriptParser from '@typescript-eslint/parser';

export default defineConfig([
	{ 
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    plugins: { js, sonarjs }, 
    extends: ["js/recommended"],
    languageOptions: {
      ecmaVersion: 'latest',
      parser: typescriptParser,
    }
  },
	{
		rules: {
      'no-console': 'error',
      'react/react-in-jsx-scope': 'off',
      'prefer-const': 'error',
      'no-nested-ternary': 'error',
      complexity: 'error',
      'no-else-return': 'error',
      'no-unused-vars': 'error',
      'sonarjs/cognitive-complexity': ['error', 15],
		},
	},
]);
