import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as set_style, k as add_location, l as attr_dev, m as insert_dev, n as append_dev, o as noop } from './client.482fdbe5.js';

/* src\routes\services.svelte generated by Svelte v3.24.1 */

const file = "src\\routes\\services.svelte";

function create_fragment(ctx) {
	let div;
	let h10;
	let t0;
	let t1;
	let article0;
	let h11;
	let t2;
	let t3;
	let p0;
	let t4;
	let t5;
	let article1;
	let h12;
	let t6;
	let t7;
	let p1;
	let t8;
	let t9;
	let article2;
	let h13;
	let t10;
	let t11;
	let p2;
	let t12;

	const block = {
		c: function create() {
			div = element("div");
			h10 = element("h1");
			t0 = text("About Us");
			t1 = space();
			article0 = element("article");
			h11 = element("h1");
			t2 = text("Business Automation");
			t3 = space();
			p0 = element("p");
			t4 = text("Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.");
			t5 = space();
			article1 = element("article");
			h12 = element("h1");
			t6 = text("Business Consulting");
			t7 = space();
			p1 = element("p");
			t8 = text("Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.");
			t9 = space();
			article2 = element("article");
			h13 = element("h1");
			t10 = text("Bookkeeping");
			t11 = space();
			p2 = element("p");
			t12 = text("Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h10 = claim_element(div_nodes, "H1", { style: true });
			var h10_nodes = children(h10);
			t0 = claim_text(h10_nodes, "About Us");
			h10_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			article0 = claim_element(nodes, "ARTICLE", { class: true });
			var article0_nodes = children(article0);
			h11 = claim_element(article0_nodes, "H1", {});
			var h11_nodes = children(h11);
			t2 = claim_text(h11_nodes, "Business Automation");
			h11_nodes.forEach(detach_dev);
			t3 = claim_space(article0_nodes);
			p0 = claim_element(article0_nodes, "P", {});
			var p0_nodes = children(p0);
			t4 = claim_text(p0_nodes, "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.");
			p0_nodes.forEach(detach_dev);
			article0_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			article1 = claim_element(nodes, "ARTICLE", { class: true, style: true });
			var article1_nodes = children(article1);
			h12 = claim_element(article1_nodes, "H1", {});
			var h12_nodes = children(h12);
			t6 = claim_text(h12_nodes, "Business Consulting");
			h12_nodes.forEach(detach_dev);
			t7 = claim_space(article1_nodes);
			p1 = claim_element(article1_nodes, "P", {});
			var p1_nodes = children(p1);
			t8 = claim_text(p1_nodes, "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.");
			p1_nodes.forEach(detach_dev);
			article1_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			article2 = claim_element(nodes, "ARTICLE", { class: true });
			var article2_nodes = children(article2);
			h13 = claim_element(article2_nodes, "H1", {});
			var h13_nodes = children(h13);
			t10 = claim_text(h13_nodes, "Bookkeeping");
			h13_nodes.forEach(detach_dev);
			t11 = claim_space(article2_nodes);
			p2 = claim_element(article2_nodes, "P", {});
			var p2_nodes = children(p2);
			t12 = claim_text(p2_nodes, "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.");
			p2_nodes.forEach(detach_dev);
			article2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(h10, "font-weight", "bold");
			add_location(h10, file, 17, 4, 492);
			attr_dev(div, "class", "landing svelte-1iux8xj");
			add_location(div, file, 16, 0, 465);
			add_location(h11, file, 21, 4, 582);
			add_location(p0, file, 22, 4, 616);
			attr_dev(article0, "class", "page_section");
			add_location(article0, file, 20, 0, 546);
			add_location(h12, file, 26, 4, 1040);
			add_location(p1, file, 27, 4, 1074);
			attr_dev(article1, "class", "page_section");
			set_style(article1, "background", "#313137", 1);
			set_style(article1, "color", "white", 1);
			add_location(article1, file, 25, 0, 941);
			add_location(h13, file, 31, 4, 1435);
			add_location(p2, file, 32, 4, 1461);
			attr_dev(article2, "class", "page_section");
			add_location(article2, file, 30, 0, 1399);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h10);
			append_dev(h10, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, article0, anchor);
			append_dev(article0, h11);
			append_dev(h11, t2);
			append_dev(article0, t3);
			append_dev(article0, p0);
			append_dev(p0, t4);
			insert_dev(target, t5, anchor);
			insert_dev(target, article1, anchor);
			append_dev(article1, h12);
			append_dev(h12, t6);
			append_dev(article1, t7);
			append_dev(article1, p1);
			append_dev(p1, t8);
			insert_dev(target, t9, anchor);
			insert_dev(target, article2, anchor);
			append_dev(article2, h13);
			append_dev(h13, t10);
			append_dev(article2, t11);
			append_dev(article2, p2);
			append_dev(p2, t12);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(article0);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(article1);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(article2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Services> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Services", $$slots, []);
	return [];
}

class Services extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Services",
			options,
			id: create_fragment.name
		});
	}
}

export default Services;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuOWY4NmY4ODMuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
