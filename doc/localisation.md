# Localization

Localization is split in two parts:
* Backend localization which handle localized error messages, tables and elements names, placehodlers and titles. The backend is in charge of the localization of strings related to the data schema.
* Frontend React components will be localized using i18next for React. So only GUI elements which are not directly related to data schema.

* The data are localized by the users while it filled them. Postal addresses, product descriptions and all string will be created with specificities of the user language. If the data need to be localized, it will be possible to create a database schema with a lang column to handle the different cases.  

## Language selection

Flag selector is used to select the language

	https://www.npmjs.com/package/react-flags-select
	npm install react-flags-select --save

## Translations management

I do not use il8nexus because the free offer is limited is 250 strings that I will pass this number.

I use this package

    https://www.i18next.com/

		https://medium.com/@shubham3480/adding-multi-lingual-support-in-react-44fa34a9500c
		
		npm install i18next --save
		npm i i18next-xhr-backend
		npm install @headlessui/react
		npm install @heroicons/react   

## Usage

	{t("navbar:123")}	
	{t("create")}
	{t("boards:123")}	