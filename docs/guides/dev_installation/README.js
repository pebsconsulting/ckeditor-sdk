Ext.data.JsonP.dev_installation({"guide":"<h1 id='dev_installation-section-ckeditor-quick-start-guide'>CKEditor Quick Start Guide</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/dev_installation-section-download'>Download</a></li>\n<li><a href='#!/guide/dev_installation-section-unpacking'>Unpacking</a></li>\n<li><a href='#!/guide/dev_installation-section-trying-out'>Trying Out</a></li>\n<li><a href='#!/guide/dev_installation-section-adding-ckeditor-to-your-page'>Adding CKEditor to Your Page</a></li>\n<li><a href='#!/guide/dev_installation-section-next-steps'>Next Steps</a></li>\n</ol>\n</div>\n\n<p>The aim of this article is to get you up and running with CKEditor in two minutes.</p>\n\n<h2 id='dev_installation-section-download'>Download</h2>\n\n<p>Visit the official <a href=\"http://ckeditor.com/download\">CKEditor Download</a> site. For a production site we recommend you choose the default <strong>Standard Package</strong> and click the <strong>Download CKEditor</strong> button to get the <code>.zip</code> installation file. If you want to try out more editor features, you can download the <strong>Full Package</strong> instead.</p>\n\n<p><a href=\"http://ckeditor.com/download\"><img src=\"guides/dev_installation/ckeditor_quick_start_download.png\" alt=\"CKEditor Download site\" width=\"696\" height=\"321\"></a></p>\n\n<h2 id='dev_installation-section-unpacking'>Unpacking</h2>\n\n<p>Unpack (extract) the downloaded <code>.zip</code> archive to the <code>ckeditor</code> directory in the root of your website.</p>\n\n<h2 id='dev_installation-section-trying-out'>Trying Out</h2>\n\n<p>CKEditor comes with a collection of samples that you can try out to verify if the installation was successful as well as see some CKEditor usage scenarios, both basic and more advanced.</p>\n\n<p>Open the following page in the browser:\n<code>http://&lt;your site&gt;/ckeditor/samples/index.html</code></p>\n\n<p>Browse the samples to see how CKEditor can be used and customized.</p>\n\n<h2 id='dev_installation-section-adding-ckeditor-to-your-page'>Adding CKEditor to Your Page</h2>\n\n<p>If the samples work correctly, you are ready to build your own site with CKEditor included.</p>\n\n<p>To start, create a simple HTML page with a <code>&lt;textarea&gt;</code> element in it. You will then need to do two things:</p>\n\n<ol>\n<li>Add a call to the CKEditor script in the <code>&lt;script&gt;</code> element of your page.</li>\n<li>Use the <a href=\"#!/api/CKEDITOR-method-replace\"><code>CKEDITOR.replace()</code></a> method to  replace the existing <code>&lt;textarea&gt;</code> element with CKEditor.</li>\n</ol>\n\n\n<p>See the following example:</p>\n\n<pre><code>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n    &lt;head&gt;\n        &lt;title&gt;A Simple Page with CKEditor&lt;/title&gt;\n        &lt;!-- Make sure the path to CKEditor is correct. --&gt;\n        &lt;script src=\"../ckeditor.js\"&gt;&lt;/script&gt;\n    &lt;/head&gt;\n    &lt;body&gt;\n        &lt;form&gt;\n            &lt;textarea name=\"editor1\" id=\"editor1\" rows=\"10\" cols=\"80\"&gt;\n                This is my textarea to be replaced with CKEditor.\n            &lt;/textarea&gt;\n            &lt;script&gt;\n                // Replace the &lt;textarea id=\"editor1\"&gt; with a CKEditor\n                // instance, using default configuration.\n                <a href=\"#!/api/CKEDITOR-method-replace\" rel=\"CKEDITOR-method-replace\" class=\"docClass\">CKEDITOR.replace</a>( 'editor1' );\n            &lt;/script&gt;\n        &lt;/form&gt;\n    &lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n\n<p>When you are done, open your sample page in the browser.</p>\n\n<p><strong>Congratulations! You have just installed and used CKEditor on your own page in virtually no time!</strong></p>\n\n<p><img src=\"guides/dev_installation/ckeditor_on_page.png\" alt=\"CKEditor added to your sample page\" width=\"483\" height=\"252\"></p>\n\n<h2 id='dev_installation-section-next-steps'>Next Steps</h2>\n\n<p>Go ahead and play a bit more with the samples; try to add the same functionality to your own pages (you can always see the sample source for some hints). And when you are ready to dive a bit deeper into CKEditor, you can try the following:</p>\n\n<ol>\n<li>Check the <a href=\"#!/guide/dev_configuration\">Configuration</a> section to see how to adjust the editor to your needs.</li>\n<li><a href=\"#!/guide/dev_toolbar\">Modify your toolbar</a> to only include the features that you need. You can find the complete list of all toolbar buttons available in your build in the \"Toolbar Configurations\" sample.</li>\n<li>Browse the <a href=\"http://ckeditor.com/addons/plugins/all\">Add-ons Repository</a> for some additional plugins or skins.</li>\n<li>Use <a href=\"http://ckeditor.com/builder\">CKBuilder</a> to create your custom CKEditor build.</li>\n<li>Browse the <a href=\"#!/guide\">Developer's Guide</a> for some further ideas on what to do with CKEditor and <a href=\"http://ckeditor.com/forums\">join the community</a> to discuss all things CKEditor with fellow developers!</li>\n</ol>\n\n","title":"Quick Start Guide","meta_description":"How to download, install, and use CKEditor.","meta_keywords":"ckeditor, editor, wysiwyg, online, download, downloading, install, installation, sample, example"});