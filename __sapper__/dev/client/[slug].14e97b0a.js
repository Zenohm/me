import { S as SvelteComponentDev, i as init, s as safe_not_equal, e as element, a as space, t as text, b as claim_element, d as children, f as detach, c as claim_text, g as add_location, h as insert, j as append, n as noop, m as mount_component, k as set_data } from './client.1c9a57af.js';

/* src/components/Bio.svelte generated by Svelte v3.4.4 */

const file = "src/components/Bio.svelte";

function create_fragment(ctx) {
	var div, img, t0, p, t1, strong, t2, t3, a0, t4, t5, a1, t6, t7, a2, t8, t9;

	return {
		c: function create() {
			div = element("div");
			img = element("img");
			t0 = space();
			p = element("p");
			t1 = text("Hi, I'm ");
			strong = element("strong");
			t2 = text("Maxi");
			t3 = text(". I'm a software engineer and data scientist from Córdoba, Argentina.\n    You can follow me on ");
			a0 = element("a");
			t4 = text("Twitter");
			t5 = text(",\n    see some of my work on ");
			a1 = element("a");
			t6 = text("GitHub");
			t7 = text(",\n    or read more about me on ");
			a2 = element("a");
			t8 = text("my website");
			t9 = text(".");
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			img = claim_element(div_nodes, "IMG", { src: true, alt: true, class: true }, false);
			var img_nodes = children(img);

			img_nodes.forEach(detach);
			t0 = claim_text(div_nodes, "\n  ");

			p = claim_element(div_nodes, "P", { class: true }, false);
			var p_nodes = children(p);

			t1 = claim_text(p_nodes, "Hi, I'm ");

			strong = claim_element(p_nodes, "STRONG", {}, false);
			var strong_nodes = children(strong);

			t2 = claim_text(strong_nodes, "Maxi");
			strong_nodes.forEach(detach);
			t3 = claim_text(p_nodes, ". I'm a software engineer and data scientist from Córdoba, Argentina.\n    You can follow me on ");

			a0 = claim_element(p_nodes, "A", { href: true, target: true }, false);
			var a0_nodes = children(a0);

			t4 = claim_text(a0_nodes, "Twitter");
			a0_nodes.forEach(detach);
			t5 = claim_text(p_nodes, ",\n    see some of my work on ");

			a1 = claim_element(p_nodes, "A", { href: true, target: true }, false);
			var a1_nodes = children(a1);

			t6 = claim_text(a1_nodes, "GitHub");
			a1_nodes.forEach(detach);
			t7 = claim_text(p_nodes, ",\n    or read more about me on ");

			a2 = claim_element(p_nodes, "A", { href: true, target: true }, false);
			var a2_nodes = children(a2);

			t8 = claim_text(a2_nodes, "my website");
			a2_nodes.forEach(detach);
			t9 = claim_text(p_nodes, ".");
			p_nodes.forEach(detach);
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			img.src = "profile-pic.png";
			img.alt = "Maxi Ferreira";
			img.className = "svelte-1ulceh0";
			add_location(img, file, 21, 2, 275);
			add_location(strong, file, 23, 12, 341);
			a0.href = "https://www.twitter.com/Charca";
			a0.target = "_blank";
			add_location(a0, file, 24, 25, 457);
			a1.href = "https://www.github.com/Charca";
			a1.target = "_blank";
			add_location(a1, file, 25, 27, 554);
			a2.href = "https://www.maxiferreira.com";
			a2.target = "_blank";
			add_location(a2, file, 26, 29, 651);
			p.className = "svelte-1ulceh0";
			add_location(p, file, 22, 2, 325);
			div.className = "svelte-1ulceh0";
			add_location(div, file, 20, 0, 267);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);
			append(div, img);
			append(div, t0);
			append(div, p);
			append(p, t1);
			append(p, strong);
			append(strong, t2);
			append(p, t3);
			append(p, a0);
			append(a0, t4);
			append(p, t5);
			append(p, a1);
			append(a1, t6);
			append(p, t7);
			append(p, a2);
			append(a2, t8);
			append(p, t9);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
			}
		}
	};
}

class Bio extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

/* src/routes/blog/[slug].svelte generated by Svelte v3.4.4 */

const file$1 = "src/routes/blog/[slug].svelte";

function create_fragment$1(ctx) {
	var title_value, t0, header, p, t1_value = ctx.post.printDate, t1, t2, t3_value = ctx.post.printReadingTime, t3, t4, h1, t5_value = ctx.post.title, t5, t6, hr0, t7, div, article, raw_value = ctx.post.html, t8, hr1, t9, current;

	document.title = title_value = ctx.post.title;

	var bio = new Bio({ $$inline: true });

	return {
		c: function create() {
			t0 = space();
			header = element("header");
			p = element("p");
			t1 = text(t1_value);
			t2 = text(" ~ ");
			t3 = text(t3_value);
			t4 = space();
			h1 = element("h1");
			t5 = text(t5_value);
			t6 = space();
			hr0 = element("hr");
			t7 = space();
			div = element("div");
			article = element("article");
			t8 = space();
			hr1 = element("hr");
			t9 = space();
			bio.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n");

			header = claim_element(nodes, "HEADER", { class: true }, false);
			var header_nodes = children(header);

			p = claim_element(header_nodes, "P", { class: true }, false);
			var p_nodes = children(p);

			t1 = claim_text(p_nodes, t1_value);
			t2 = claim_text(p_nodes, " ~ ");
			t3 = claim_text(p_nodes, t3_value);
			p_nodes.forEach(detach);
			t4 = claim_text(header_nodes, "\n  ");

			h1 = claim_element(header_nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t5 = claim_text(h1_nodes, t5_value);
			h1_nodes.forEach(detach);
			t6 = claim_text(header_nodes, "\n  ");

			hr0 = claim_element(header_nodes, "HR", { class: true }, false);
			var hr0_nodes = children(hr0);

			hr0_nodes.forEach(detach);
			header_nodes.forEach(detach);
			t7 = claim_text(nodes, "\n");

			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			article = claim_element(div_nodes, "ARTICLE", { class: true }, false);
			var article_nodes = children(article);

			article_nodes.forEach(detach);
			t8 = claim_text(div_nodes, "\n  ");

			hr1 = claim_element(div_nodes, "HR", {}, false);
			var hr1_nodes = children(hr1);

			hr1_nodes.forEach(detach);
			t9 = claim_text(div_nodes, "\n  ");
			bio.$$.fragment.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			p.className = "svelte-1uh130i";
			add_location(p, file$1, 47, 2, 842);
			h1.className = "svelte-1uh130i";
			add_location(h1, file$1, 48, 2, 894);
			hr0.className = "svelte-1uh130i";
			add_location(hr0, file$1, 49, 2, 918);
			header.className = "svelte-1uh130i";
			add_location(header, file$1, 46, 0, 831);
			article.className = "content";
			add_location(article, file$1, 52, 2, 961);
			add_location(hr1, file$1, 55, 2, 1024);
			div.className = "container";
			add_location(div, file$1, 51, 0, 935);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, header, anchor);
			append(header, p);
			append(p, t1);
			append(p, t2);
			append(p, t3);
			append(header, t4);
			append(header, h1);
			append(h1, t5);
			append(header, t6);
			append(header, hr0);
			insert(target, t7, anchor);
			insert(target, div, anchor);
			append(div, article);
			article.innerHTML = raw_value;
			append(div, t8);
			append(div, hr1);
			append(div, t9);
			mount_component(bio, div, null);
			current = true;
		},

		p: function update(changed, ctx) {
			if ((!current || changed.post) && title_value !== (title_value = ctx.post.title)) {
				document.title = title_value;
			}

			if ((!current || changed.post) && t1_value !== (t1_value = ctx.post.printDate)) {
				set_data(t1, t1_value);
			}

			if ((!current || changed.post) && t3_value !== (t3_value = ctx.post.printReadingTime)) {
				set_data(t3, t3_value);
			}

			if ((!current || changed.post) && t5_value !== (t5_value = ctx.post.title)) {
				set_data(t5, t5_value);
			}

			if ((!current || changed.post) && raw_value !== (raw_value = ctx.post.html)) {
				article.innerHTML = raw_value;
			}
		},

		i: function intro(local) {
			if (current) return;
			bio.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			bio.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(header);
				detach(t7);
				detach(div);
			}

			bio.$destroy();
		}
	};
}

async function preload({ params, query }) {
  // the `slug` parameter is available because
  // this file is called [slug].html
  const res = await this.fetch(`blog/${params.slug}.json`);
  const data = await res.json();

  if (res.status === 200) {
    return { post: data };
  } else {
    this.error(res.status, data.message);
  }
}

function instance($$self, $$props, $$invalidate) {
	let { post } = $$props;

	const writable_props = ['post'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Slug> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('post' in $$props) $$invalidate('post', post = $$props.post);
	};

	return { post };
}

class Slug extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment$1, safe_not_equal, ["post"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.post === undefined && !('post' in props)) {
			console.warn("<Slug> was created without expected prop 'post'");
		}
	}

	get post() {
		throw new Error("<Slug>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set post(value) {
		throw new Error("<Slug>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Slug;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLjE0ZTk3YjBhLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2Jsb2cvW3NsdWddLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcbiAgICAvLyB0aGUgYHNsdWdgIHBhcmFtZXRlciBpcyBhdmFpbGFibGUgYmVjYXVzZVxuICAgIC8vIHRoaXMgZmlsZSBpcyBjYWxsZWQgW3NsdWddLmh0bWxcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKGBibG9nLyR7cGFyYW1zLnNsdWd9Lmpzb25gKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIHJldHVybiB7IHBvc3Q6IGRhdGEgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcnJvcihyZXMuc3RhdHVzLCBkYXRhLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBCaW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CaW8uc3ZlbHRlJ1xuICBleHBvcnQgbGV0IHBvc3Rcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIGhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgaGVhZGVyIGgxIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjdlbTtcbiAgfVxuXG4gIGhlYWRlciBwIHtcbiAgICBjb2xvcjogI0FBQTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtZmFtaWx5OiBSdWJpaywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgaGVhZGVyIGhyIHtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPntwb3N0LnRpdGxlfTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48aGVhZGVyPlxuICA8cD57cG9zdC5wcmludERhdGV9IH4ge3Bvc3QucHJpbnRSZWFkaW5nVGltZX08L3A+XG4gIDxoMT57cG9zdC50aXRsZX08L2gxPlxuICA8aHIgLz5cbjwvaGVhZGVyPlxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICA8YXJ0aWNsZSBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICB7QGh0bWwgcG9zdC5odG1sfVxuICA8L2FydGljbGU+XG4gIDxociAvPlxuICA8QmlvIC8+XG48L2Rpdj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnREErQ00sSUFBSSxDQUFDLFNBQVMseUJBQUssSUFBSSxDQUFDLGdCQUFnQiw2QkFDdkMsSUFBSSxDQUFDLEtBQUssaURBS04sSUFBSSxDQUFDLElBQUk7O29DQVZWLElBQUksQ0FBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dFQUFWLElBQUksQ0FBQyxLQUFLOzs7O2tFQUlkLElBQUksQ0FBQyxTQUFTOzs7O2tFQUFLLElBQUksQ0FBQyxnQkFBZ0I7Ozs7a0VBQ3ZDLElBQUksQ0FBQyxLQUFLOzs7O29FQUtOLElBQUksQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFwRFgsZUFBZSxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7QUFDbkQ7QUFDQTtBQUNFLEVBQUUsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUM3RCxFQUFJLE1BQU0sSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDOztBQUVoQyxFQUFFLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7QUFDMUIsSUFBSSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0FBQzFCLEdBQUcsTUFBTTtBQUNULElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6QyxHQUFHO0FBQ0gsQ0FBQzs7O0NBS00sTUFBSSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
