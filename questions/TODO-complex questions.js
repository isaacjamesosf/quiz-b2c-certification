var complex = {
  1: {
    questionNumber: "Question #:1",
    description: `Given the requirements:

		• To integrate with an external web service using HTTP requests
		• To create a service for this purpose with the Service framework using the LocalServiceRegistry class.
		• To test the service before the external service provider makes the API available

		Which solution allows the developer to satisfy the requirements?`,
    options: {
      options: {
        A: `Create a service and implement the mockfull callback and a sitepreference to enable or disable the mock response.`,
        B: `Create a service and implement the mockFill callback and set the service mode to mock.`,
        C: `Create a service and a Sitepreference that induce the service to respond witch a mock response using a conditional.`,
        D: `Create two services, one mock and the real one, and a Sitepreference that enable the mock or the real one`,
      },
      answer: ["A"],
      answerNote: `Actually the proper response should be B(Create a service and implement the mockFill callback and set the service mode to mock.) but with one consideration: There is no MockFill function in the API but mockfull`,
    },

    5: {
      questionNumber: "Question #:5",
      description: `Which three configuration does a developer need to ensure to have a new product visible in the Storefront?
		Choose 3 answers`,
      options: {
        A: `The product has a Price`,
        B: `The Storefront catalog that contains the product is assigned to a site`,
        C: `The product has a master product`,
        D: `The product is online and searchable`,
        E: `The search index is built.`,
      },
      answer: ["B,C,D"],
    },

    6: {
      questionNumber: "Question #:6",
      description: `Universal Containers calls the following combination of products “The Basics” and sells the combination as a unique product ID:
		One Model 103 container
		Five Model 611 container
		Tree Model 201 container
		The Developer created these three products in the catalog. What is the next step in Business Manager to create “The Basics” as a combination?`,
      options: {
        A: `In the Product Bundles module, create a bundle named “The Basics”.`,
        B: `In the Products module, create a product named “The Basics” and add the products to the Product Bundles tab.`,
        C: `In the Products module, create a product named “The Basics” and add the products to the Product Sets tab.`,
        D: `In the Product Sets module, create a product set named “The Basics”.`,
      },
      answer: ["B"],
    },

    7: {
      questionNumber: "Question #:7",
      description: `A Digital Developer needs to add a new form to the shopping cart page to allow customers to enter their rewards pass ID. There is already an existing Cart.js controller that handles processing of the other cart forms. In addition, a form field node is in the form XML and the necessary form input is present in the ISML template.
	The code below is the submit button for the ISML markup`,

      options: {
        A: `Add an <action/> node to the form defition XML with the attribute formid=”addRewardPass”
	Add the key addRewardPass, with a processing function as a value, to the object passed to the Form.handleAction() method in the Cart.js controller`,

        B: `Add an <submit/> node to the form defition XML with the attribute formid=”addRewardPass”
	Add the key addRewardPass, with a processing function as a value, to the object passed to the Form.handleAction() method in the Cart.js controller`,

        C: `Add the attribute addtl-form-action=”addRewardPass” to the ISML form
	Add the key addRewardPass, with a processing function as a value, to the object passed to the Form.handleAction() method in the Cart.js controller`,

        D: `Add an <action/> node to the form defition XML with the attribute formid=”addRewardPass”
	No change to Cart.js controller`,
      },
      answer: ["A"],
	  hasImage: true,
    },

    19: {
      questionNumber: "Question #:19",
      description: `A Digital Developer needs to add logging to the following code:

	Which statement logs the HTTP status code to a debug-level custom log file?`,
      options: {
        A: `logger.getLogger(‘profile’).debug("Error retrieving profile email, Status Code: ", http.statusCode);`,
        B: `logger.debug("Error retrieving profile email, Status Code: {0} was returned.", http.statusCode);`,
        C: `Logger.getLogger().debug("Error retrieving profile email, Status Code: {0} was returned.", http.statusCode);`,
        D: `Logger.getLogger(‘profile’).debug("Error retrieving profile email, Status Code: {0} was returned.", http.statusCode);`,
      },
      answer: ["D"],
      answerNote:
        "SOMETHING LIKE THAT WHERE THE GOAL WAS TO KNOW HOW TO LOG A CUSTOM LOG AT DEBUG LEVE",
	hasImage: true,
    },

    20: {
      questionNumber: "Question #:20",
      description: `Assume the code below is executing:
	Business Manager has the configuration:
	- Active Log category is “root” with log level of “info.”
	Given this information, what is the beginning of the filename in which the log will be written?`,
      options: {
        A: `xyz`,
        B: `custominfo-blade`,
        C: `custom-export`,
        D: `custom-xyz`,
      },
      answer: ["D"],
    },

    21: {
      questionNumber: "Question #:21",
      description: `A developer is importing edits for two different sites into the same sandbox, and is provided with four
	different files. Which two XML files should the developer import using the site-specific Merchant Tools import modules, instead of the Administration section import modules? Choose 2 answers.`,
      options: {
        A: `System type extensions (sites only)`,
        B: `Site Jobs (sites)`,
        C: `Search Settings (Search and Sites)`,
        D: `Promotions ( sites and online marketing)`,
      },
      answer: ["C, D"],
    },

    25: {
      questionNumber: "Question #25:",
      description: `The SFRA Function:

	Server.get('Show', consentTracking.consent, cache.applyDefaultCache,
	function (req,res,next){
	var Site = require('dw/system/Syte");
	var pageMetaHelpter = require('*/cartridge/scripts/helpers/pageMetaHelper');
	pageMetaHelpter.setPageMetaTags(req.pageMetaData, Site.current); res.render('/home/homePage');
	===== Missing code here =====
	}, pageMetadata.computedPageMetadata);

	The controller endpoint code snippet above does not work. Which line of code should the developer use to replace on “Missing Code here” and correct the problem?`,
      options: {
        A: `next();`,
        B: `req.next();`,
        C: `return res;`,
        D: `res.next();`,
      },
      answer: ["A"],
      answerNote:
        "NOT EXACTLY THIS ONE BUT ONE QUESTION ABOUT HOW TO APPLY CACHE ON SFRA USING ITS BEST PRACTICES: ANSWER: cache.applyDefaultCache",
    },

    29: {
      questionNumber: "Question #:29",
      description: `A developer is writing a server side script that needs to maintain state across calls. The persistente information needed includes these items.
	• The current customer
	• Whether or not the customer is authenticated
	• The privacy attributes (such as tracking consent or cookie policy)
	Which technique should the developer use to maintain state in an efficient and scalable manner that follows best practice?`,
      options: {
        A: `Use a non-replicable Custom Object to store the information temporarily.`,
        B: `Use the Session class in the B2C Commerce API.`,
        C: `Use an SFRA controller, because it runs server-side, the state is automatically maintained`,
        D: `Use a client-side cookie to store the information for the session duration.`,
      },
      answer: ["B"],
    },

    36: {
      questionNumber: "Question #:36",
      description: `A Newsletter controller contains the following route:

	Server.post('Subscribe', function (req,res,next){
	var newsletterForm = server.forms.getForm('newsletter');
	var CustomObjectMgr = require('dw/object/CustomObjectMgr'); 
	if(newsletterForm.valid){ 
	try{ var CustomObject = CustomObjectMgr.createCustomObejct('NewsletterSubscription', newsletterform.email.value); CustomObject.custom.firstName = newsletterForm.fname.value; CustomObject.custom.lastName = newsletterForm.lname.value;
	} catch(e){
	//Catch error here
	}
	}
	next();
	});

	Assuming the Custom Object metadata exists, why does this route fail to render the newsletter template when the subscription form is correctly submitted?`,
      options: {
        A: `Custom Objects can only be created by Job scripts`,
        B: `The Subscribe route is missing the server.middleware.httpt middleware.`,
        C: `The Custom Object creation is not wrapped in a Transaction.`,
        D: `The CustomObjectMgr variable should be declare outside of the route.`,
      },
      answer: ["C"],
    },

    39: {
      questionNumber: "Question #:39",
      description: `Given a file in a plug-in cartridge with the following code:
	‘use strict’:
	Var base = module.superModule;
	Function applyCustomCache (req,res,next){
	res.CachePeriod = 6; //eslint-disable-line no-param-reassign
	res.cachePeriodUnit = ‘hours’) //eslint-disable-line no-param-reassign
	next();
	}
	Module.exports = base;
	Module.exports.applyCustomCache = applyCustomCache;

	What does this code extend?`,
      options: {
        A: `A controller`,
        B: `A middleware script`,
        C: `A decorator`,
        D: `A model`,
      },
      answer: ["B"],
    },
    40: {
      questionNumber: "Question #:40",
      description: `Below is a form definition snippet from the newsletter.xml file:

	<?xml versión=”1.0”?>
	<form xmlns=http://www.demandware.com/xml/form/2008-04-15>
	<field formid=”email” lavel=”Email” type=”String” mandatory=”True” max-length=”50” />
	</form>
	Which line of code creates a JSON object to contain the form data?`,
      options: {
        A: `Server.form.getForm(‘dwfrm_newsletter’)`,
        B: `Server.form.getForm(‘newsletter’);`,
        C: `Server.forms.getForm(‘newsletter’);`,
        D: `Server.forms.getForm(‘dwfrm_newsletter’)`,
      },
      answer: ["C"],
    },

    44: {
      questionNumber: "Question #:44",
      description: `A Digital Developer is implementing an Open Commerce API call to add products to a basket. Given the following resource configuration:
	
	Which modification allows the requests to successfully execute?`,
      options: {
        A: `Change the "resource_id" value to: "/baskets/*/items".`,
        B: `Change the "write_attributes" value to: "(+items)".`,
        C: `Change the "read_attributes" value to: "(items)".`,
        D: `Change the "methods" value to: ["get", "post"].`,
      },
      answer: ["D"],
	  hasImage: true,
    },

    45: {
      questionNumber: "Question #:45",
      description: `Business Manager has the configuration:
		• Active log category is “root”
		• Log level of INFO
	The code below executes:
	Var log = Logger.getLogger(“products”,”export”);
	Log.info (“This is important information”);

	Using this information, what is the beginning of the filename in which the log will be written?`,
      options: {
        A: `custom-export`,
        B: `custom-products`,
        C: `products`,
        D: `info-export`,
      },
      answer: ["B"],
    },

    49: {
      questionNumber: "Question #:49",
      description: `Given the requirements:
	• To show the washing instructions for a clothing product on a dedicated section the detail page
	• Washing instructions come from the product information manager(PIM)
	• To have this attribute available to localize in the Storefront.
	Which action meets these requirements?`,
      options: {
        A: `Set the product system object type as localizable`,
        B: `Add a resource file for every locale for which the attribute needs to be translated.`,
        C: `Set the custom attribute as localizable`,
        D: `Add a custom attribute for each locale`,
      },
      answer: ["C"],
    },

    52: {
      questionNumber: "Question #:52",
      description: `A Digital Developer is adding support for an additional language other than the default. The locale code for the new language is de. In which folder should the developer place resource bundles?`,
      options: {
        A: `templates/de`,
        B: `templates/default`,
        C: `templates/resources`,
        D: `templates/default/resources`,
      },
      answer: ["C"],
      answernote: `Documentation
	•	templates/de should be used to hold the specific ISMLs for de locale
	•	templates/default should be used to hold the generic ISMLs that should be loaded for all languages as fallback
	•	templates/resources should be used to hold the resource bundles for all locales, only adding the locale sufix in the file, like account_de.properties`,
    },
    55: {
      questionNumber: "Question #:55",
      description: `To ensure SFRA best practices and protect against request forgery, the developer introduced CSRF token generation in the customer address form:
		<form … action = “submit”>
		<input name =${"”${dw.web.CSRFProtection.getTokenName()}”"}
		value = ${"“${dw.web.CSRFProtection.generateToken()}"}”>
		…
		<the rest of the Form fields>
		…
		</form>

		To implement CSRF protection when the form is submitted, the developer needs to introduce the CSRF validation using one or both of these methods as applicable:
		• validateRequest
		• validateAjaxRequest
		Where in the code does the developer need to add this CSRF validation check?`,
      options: {
        A: `In the controller function that displays the form`,
        B: `In the middleware chain of the controller post route`,
        C: `In the controller function that handles the submitted form`,
        D: `In the model function that persists the form data`,
      },
      answer: ["B"],
    },

    59: {
      questionNumber: "Question #:59",
      description: `Given the following ISML example, how should a developer reference the product object in the current iteration of the basket?
		<isloop items =”${"”${pdict.Basket.products}”"} var=”product” status= “loopstatus”>
		…
		</isloop>`,
      options: {
        A: `product`,
        B: `pdict.Basket.products{loopstatus}`,
        C: `loopstatus.product`,
        D: `pdict.product`,
      },
      answer: ["A"],
    },

    62: {
      questionNumber: "Question #:62",
      description: `The following sample code is NOT providing the desired results. The Digital Developer needs to add an entry to the logs to debug the problem.

		Which statement correctly adds a log entry?`,
      options: {
        A: `Logger.exception(‘Unable to find Apple Pay payment instrument for order.‘+paymentInstruments);`,
        B: `Logger.getErrorLog().log(‘Unable to find Apple Pay payment instrument for order.‘+paymentInstruments);`,
        C: `Logger.fault(‘Unable to find Apple Pay payment instrument for order.‘+paymentInstruments);`,
        D: `Logger.error(‘Unable to find Apple Pay payment instrument for order.‘+paymentInstruments);`,
      },
      answer: ["A"],
    },

    64: {
      questionNumber: "Question #:64",
      description: `A developer is asked to improve the maintainability of a page by reducing its code repetition. What are two techniques the developer should implement to achieve this? Choose 2 answers.`,
      options: {
        A: `Require and render templates with <isscript> tags`,
        B: `Use local template includes`,
        C: `Implement template decorators paired with replace tags`,
        D: `Embed partial files using ISML expressions`,
      },
      answer: ["B, C"],
      answerNote: `
		•	<isscript> on SFRA is most used to include assets(JS and CSS) into the page. Documentation
		•	<isinclude> documentation
		o	<isinclude template=”path/relative/to/templates/default/folder”
		o	<isinclude url=${"”{${URLUtils.url(“Page-Show”, “cid”, 123}”"}>
		•	<isdecorate> documentation / <isreplace> documentation
		•	ISML Expressions - ${"${....}"} - documentation`,
    },

    67: {
      questionNumber: "Question #:67",
      description: `A developer is working on a new site for the U.S based on an existing Canadian site. One of the requirements is a change to the address form. The current Canadian form has an <options> list with the correct two-letter abbreviation for the provinces.
		The U.S. requirements are to:
		• Have an <options> list with the correct two-letter abbreviation for the states in place of the province field.
		• Set the U.S site locale.
		• Add the options list field definition to the XML file.
		How should the developer set up the files before making the required edits?`,
      options: {
        A: `Create a copy of existing address.xml file in the default folder. Rename that file to address_US.xml`,
        B: `Create a new sub-folder in the forms folder. Name it US. Copy existing address.xml file in the new folder.`,
        C: `Create a copy of existing address.xml file in the default folder. Rename that file to address_en_US.xml`,
        D: `Create a new sub-folder in the forms folder. Name it en_US. Copy existing address.xml file in the new folder.`,
      },
      answer: ["D"],
    },

    69: {
      questionNumber: "Question #:69",
      description: `Consider the following information:
		• A merchant has this three-tier category structure setup in the Storefront catalog: New Arrivals > Women > Clothing
		• The category named Clothing has all the clothing items for Women and is merchandised.
		• A Search Refinement named Newness is correctly configured for the Clothing category.
		When a merchandiser views the Clothing category, the Search Refinement appears and Works as expected. However, the merchandiser does not see the Search Refinement when searching for Clothing via the Storefront search. What is the Reason?`,
      options: {
        A: `There are conflicting Search Refinement definitions for Clothing and one of its parents categories`,
        B: `The Search Refinement definition is not set up for the Women category`,
        C: `The Search Refinement definition is not set up for the New Arrivals Category.`,
        D: `The Search Refinement definitions is not set up for the Root Category`,
      },
      answer: ["A"],
    },

    78: {
      questionNumber: "Question #:78",
      description: `Given the following snippet:
		Server.append(“Show”), function (req, res, next)
		According to SFRA, wich options shows a correct way to complete the code above in order to provide data to the response using a controller?`,
      options: {
        A: `res.viewData = { data: myDataObject }; res.render('/content/myPage'); next();`,
        B: `res.setViewData({ data: myDataObject}); res.render('/content/myPage'); next();`,
        C: `res.render('/content/myPage', {data: myDataObject }); next();`,
        D: `res.render('/content/myPage'); next();`,
      },
      answer: ["B, C"],
    },

    88: {
      questionNumber: "Question #:88",
      description: `A retailer notices that the Account Addresses page is showing the wrong shopper’s address. Which tool should the developer start with to identify the issue?`,
      options: {
        A: `Pipeline profiler`,
        B: `Code Profiler`,
        C: `Storefront Toolkit`,
        D: `Reports and Dashboards Module`,
      },
      answer: ["C"],
    },

    89: {
      questionNumber: "Question #:89",
      description: `Given the following conditions:
		• Site export file with a copy of the Storefront data for a custom site
		• Sandbox with the custom site code, but no Storefront data
		• Requirement for a working copy of SFRA for development reference
		A developer is assigned the following Business manager tasks:
		• A. Import the custom Site using Site Import/Export
		• B. Import the SFRA Demo Sites using Site Import/Export
		• C. Rebuild the custom Site search indexes
		In what sequence should the developer perform the tasks, so that the custom Site displays the products as intended?`,
      options: {
        A: `Task A, then C, then B`,
        B: `Task B, then C, then A`,
        C: `Task A, then B, then C`,
        D: `Task B, then A, then C`,
      },
      answer: ["D"],
    },

    90: {
      questionNumber: "Question #:90",
      description: `The following code ensures that an address ID CANNOT be used if it is already in use by another address in the customer’s address book. There is a problem with the code. The error message for an invalid address ID is never shown to the user on the form field. 
	
	How should the Digital Developer resolve this issue so that the error message is displayed on the address ID  form field?`,
      options: {
        A: `addressForm.invalidateFormElement("addressid");`,
        B: `addressForm.addresssid.invalidateFormElement = true;`,
        C: `addressForm.invalidateFormElement(addressForm.addressid);`,
        D: `addressForm.addresssid.invalidateFormElement();`,
      },
      answer: ["C"],
	  hasImage: true,
    },

    93: {
      questionNumber: "Question #:93",
      description: `A Digital Developer is requesting product information for an external integration. The following Open Commerce API (OCAPI) request is NOT functioning correctly:
	
	How should the Developer change the request?`,
      options: {
        A: `Change the URI to /dw/shop/v18_3/products/creative-zen-v.`,
        B: `Change the HTTP method to PUT.`,
        C: `Change the HTTP method to GET.`,
        D: `Include an authentication token in the request.`,
      },
      answer: ["C"],
	  hasImage: true,
    },

    98: {
      questionNumber: "Question #:98",
      description: `Given the customer basket described below:
	• A customer has an existing basket that consists of multiple items.
	• One of the items is identified as a gift ítem by an attribute at the product line item.
	The developer needs to write custom code to fetch the customer basket and then modify the basket based upon the items in the cart. If the basket contains any gift items, modify the basket and create a separate shipment for the gift item. Four hooks are required to make the modification, beginning with modifyGETRespone and ending with validatebasket.
	• Dw.ocapi.shop.basket.modifyGETResponse
	• -- missing hook –
	• -- missing hook --
	• dw.ocapi.shop.basket.validateBasket
	What are the two missing hooks in the middle?`,
      options: {
        A: `dw.ocapi.shop.basket.shipment.afterDELETE`,
        B: `dw.ocapi.shop.basket.shipment.beforePATCH`,
        C: `dw.ocapi.shop.basket.shipment.beforeDELETE`,
        D: `dw.ocapi.shop.baskep.shopment.beforePOST`,
      },
      answer: ["B, D"],
    },

    105: {
      questionNumber: "Question #:105",
      description: `A Digital Developer needs to check for product inventory in a specific inventory list using the Open Commerce API. An example request URL is:
	
	Which resource_id value enables the appropriate resource?`,
      options: {
        A: `/inventory_lists/*`,
        B: `/inventory_lists/**`,
        C: `/inventory_list_search`,
        D: `/products/*`,
      },
      answer: ["D"],
	  hasImage: true,
    },
    111: {
      questionNumber: "Question #:111",
      description: `A developer has the following files in template/resources:
	account.proierties
	weight.unit=kilos
	account_en.propierties
	weight.unit=stones
	account_en_US.propierties
	weight.unit= pounds
	Using the default locale configuration, what is the current outcome of the page that renders the account.isml template snippet below when visiting the Sofrefront with the English for Canada(en_CA) locale= Your parcel weighs 10 ${"${Resource.msg(‘weight.unit’,’account’)"}`,
      options: {
        A: `Your parcel weighs 10 stones.`,
        B: `Your parcel weighs 10 pounds.`,
        C: `Your parcel weighs 10 undefined.`,
        D: `Your parcel weighs 10 kilos`,
      },
      answer: ["A"],
    },

    114: {
      questionNumber: "Question #:114",
      description: `A developer has a sandbox with code to log a message during execution, and the following code:
	var Logger = require(‘dw/system/Logger’);
	Logger.info(message);
	After the code executes, the developer does not see any log file with the message in the WebDAV folder. Which task does the developer need to perform to correct this issue?`,
      options: {
        A: `Set the logging global preference to true`,
        B: `Set the log retention to a value higher than 0`,
        C: `Request that the developer’s account be given permission to the Log Centerof the current realm`,
        D: `Set the root log level to debug`,
      },
      answer: ["B"],
    },

    119: {
      questionNumber: "Question #:119",
      description: `There are three logging categories: category1, category1.eu, and category1.us. In Business Manager, category1 is enabled for WARN level and no Other categories are configured. All custom log targets are enabled. The code segment below executes
	var logger = Logger.getLogger(“loggerFile”, “category1.eu” ); 
	logger.warn(“This is a log message”);
	What is the result?`,
      options: {
        A: `Logs will be written to the log file with a prefix loggerFile.`,
        B: `Logs will not be written.`,
        C: `Logs will be written to the log file with a prefix customwarn.`,
        D: `Logs will be written to the log file with a prefix custom-loggerFile.`,
      },
      answer: ["A"],
    },

    122: {
      questionNumber: "Question #:122",
      description: `Refer to this example snippet of an ISML template:
	<h2>Welcome back, ${"${pdict.username}"}.</h2>
	The “pdict.username” variable does not print correctly when used in a similar template. Assuming that the variable is correct in the Controller's “viewData”, how should a developer temporarily modify their code to use a debugger and troubleshoot the issue in the template?`,
      options: {
        A: `Add an <isbreak> tag to have the debugger stop at the desired line.`,
        B: `Add an <isscript> tag and JavaScript with a breakpoint set.`,
        C: `Add a local <isinclude> tag to inspect the topLevel function in the call stack.`,
        D: `Add an <isdebug> tag to allow the inspection of global variables.`,
      },
      answer: ["C"],
    },
    171: {
      questionNumber: "Question #:171",
      description: `The Home-Show route uses this middleware chain:

	server.get('Show', consentTracking.consent, cache.applyDefaultCache, function
	(req, res, next) {...});

	and another cartridge extends this route without a middleware chain:

	server.append('Show', function (req, res, next) {...});

	Assuming the code is correct on both functions, does this work?`,
      options: {
        A: `True`,
        B: `False`,
      },
      answer: ["A"],
    },

    192: {
      questionNumber: "Question #:192",
      description: `success:function (data) {
		TAB $form.spinner().stop();
		TAB if(!data.success) {
		TAB TAB formValidation($form, data);
		TAB ) else{
		TAB TAB href=data.redirectURL;
		TAB }
		}
		In the code above the formValidation scripts display what kind of errors?`,
      options: {
        A: `Server-side validation errors`,
        B: `Object errors`,
        C: `All of the above`,
        D: `No errors will display`,
      },
      answer: ["A"],
    },
    30: {
      questionNumber: "Question #:30",
      description: `A Digital Developer has identified that the code segment below is causing performance problems.
		What should the Developer do to improve the code?`,
      options: {
        A: `Use a system attribute instead of the isOnSaleFlag custom attribute.`,
        B: `Avoid post-processing and use the isOnSaleFlag attribute as a search refinement.`,
        C: `Breaks the process into separate loops.`,
        D: `Avoid using an Iterator and use a Collection instead.`,
      },
      answer: ["B"],
	  hasImage: true,
    },
  },
};
