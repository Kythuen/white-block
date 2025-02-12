// vite.config.ts
import vueJSX from "file:///D:/Kythuen/white-block/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.1.1_vite@5.4.11_@types+node@20.5.1_less@4.2.0__vue@3.5.13_typescript@5.6.3_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { resolve } from "node:path";
import UnoCSS from "file:///D:/Kythuen/white-block/node_modules/.pnpm/unocss@0.64.1_postcss@8.4.49_rollup@4.28.0_vite@5.4.11_@types+node@20.5.1_less@4.2.0__vue@3.5.13_typescript@5.6.3_/node_modules/unocss/dist/vite.mjs";
import { defineConfig } from "file:///D:/Kythuen/white-block/node_modules/.pnpm/vite@5.4.10_@types+node@20.4.5_less@4.2.0/node_modules/vite/dist/node/index.js";
import { groupIconVitePlugin } from "file:///D:/Kythuen/white-block/node_modules/.pnpm/vitepress-plugin-group-icons@1.3.0/node_modules/vitepress-plugin-group-icons/dist/index.mjs";
import Components from "file:///D:/Kythuen/white-block/node_modules/.pnpm/unplugin-vue-components@28.0.0_@babel+parser@7.26.2_rollup@4.28.0_vue@3.5.13_typescript@5.6.3_/node_modules/unplugin-vue-components/dist/vite.js";

// package.json
var version = "0.0.1";

// vite.config.ts
var __vite_injected_original_dirname = "D:\\Kythuen\\white-block\\docs";
var alias = [
  { find: "~/", replacement: `${resolve(__vite_injected_original_dirname, "./.vitepress")}/` },
  // handling references `@/` in packages/core
  { find: "@/", replacement: `${resolve(__vite_injected_original_dirname, "../packages/core/src")}/` }
];
if (process.env.NODE_ENV !== "production") {
  alias.push({
    find: /^white-block$/,
    replacement: resolve(__vite_injected_original_dirname, "../packages/core/src/index.ts")
  });
  alias.unshift({
    find: /^@white-block\/types$/,
    replacement: resolve(__vite_injected_original_dirname, "../packages/types/src/index.ts")
  });
}
var vite_config_default = defineConfig({
  define: { __VERSION__: JSON.stringify(version) },
  resolve: {
    alias
  },
  plugins: [
    UnoCSS(),
    vueJSX(),
    groupIconVitePlugin(),
    Components({
      dirs: [
        "../.vitepress/theme/components/blocks",
        "../.vitepress/theme/components/tools",
        "../.vitepress/theme/components/awesome"
      ],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      extensions: ["vue"]
    })
  ],
  optimizeDeps: {
    exclude: ["vitepress"]
  },
  server: {
    host: "0.0.0.0",
    hmr: {
      overlay: false
    }
  },
  build: {
    // rollupOptions: {
    //   output: {
    //     chunkFileNames: 'assets/js/[name]-[hash].js',
    //     entryFileNames: 'assets/js/[name]-[hash].js',
    //     assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
    //     manualChunks: {
    //       'white-block': ['white-block', '@white-block/types']
    //     }
    //   }
    // },
    chunkSizeWarningLimit: 2e3,
    reportCompressedSize: false,
    sourcemap: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcS3l0aHVlblxcXFx3aGl0ZS1ibG9ja1xcXFxkb2NzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxLeXRodWVuXFxcXHdoaXRlLWJsb2NrXFxcXGRvY3NcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0t5dGh1ZW4vd2hpdGUtYmxvY2svZG9jcy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB2dWVKU1ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IHR5cGUgeyBBbGlhcyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgZ3JvdXBJY29uVml0ZVBsdWdpbiB9IGZyb20gJ3ZpdGVwcmVzcy1wbHVnaW4tZ3JvdXAtaWNvbnMnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuXG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi9wYWNrYWdlLmpzb24nXG5cbmNvbnN0IGFsaWFzOiBBbGlhc1tdID0gW1xuICB7IGZpbmQ6ICd+LycsIHJlcGxhY2VtZW50OiBgJHtyZXNvbHZlKF9fZGlybmFtZSwgJy4vLnZpdGVwcmVzcycpfS9gIH0sXG4gIC8vIGhhbmRsaW5nIHJlZmVyZW5jZXMgYEAvYCBpbiBwYWNrYWdlcy9jb3JlXG4gIHsgZmluZDogJ0AvJywgcmVwbGFjZW1lbnQ6IGAke3Jlc29sdmUoX19kaXJuYW1lLCAnLi4vcGFja2FnZXMvY29yZS9zcmMnKX0vYCB9XG5dXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGFsaWFzLnB1c2goe1xuICAgIGZpbmQ6IC9ed2hpdGUtYmxvY2skLyxcbiAgICByZXBsYWNlbWVudDogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9wYWNrYWdlcy9jb3JlL3NyYy9pbmRleC50cycpXG4gIH0pXG4gIGFsaWFzLnVuc2hpZnQoe1xuICAgIGZpbmQ6IC9eQHdoaXRlLWJsb2NrXFwvdHlwZXMkLyxcbiAgICByZXBsYWNlbWVudDogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9wYWNrYWdlcy90eXBlcy9zcmMvaW5kZXgudHMnKVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBkZWZpbmU6IHsgX19WRVJTSU9OX186IEpTT04uc3RyaW5naWZ5KHZlcnNpb24pIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhc1xuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgVW5vQ1NTKCksXG4gICAgdnVlSlNYKCksXG4gICAgZ3JvdXBJY29uVml0ZVBsdWdpbigpLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgZGlyczogW1xuICAgICAgICAnLi4vLnZpdGVwcmVzcy90aGVtZS9jb21wb25lbnRzL2Jsb2NrcycsXG4gICAgICAgICcuLi8udml0ZXByZXNzL3RoZW1lL2NvbXBvbmVudHMvdG9vbHMnLFxuICAgICAgICAnLi4vLnZpdGVwcmVzcy90aGVtZS9jb21wb25lbnRzL2F3ZXNvbWUnXG4gICAgICBdLFxuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC5tZCQvXSxcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJ11cbiAgICB9KVxuICBdLFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbJ3ZpdGVwcmVzcyddXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6ICcwLjAuMC4wJyxcbiAgICBobXI6IHtcbiAgICAgIG92ZXJsYXk6IGZhbHNlXG4gICAgfVxuICB9LFxuICBidWlsZDoge1xuICAgIC8vIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAvLyAgIG91dHB1dDoge1xuICAgIC8vICAgICBjaHVua0ZpbGVOYW1lczogJ2Fzc2V0cy9qcy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAvLyAgICAgZW50cnlGaWxlTmFtZXM6ICdhc3NldHMvanMvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgLy8gICAgIGFzc2V0RmlsZU5hbWVzOiAnYXNzZXRzL1tleHRdL1tuYW1lXS1baGFzaF0uW2V4dF0nLFxuICAgIC8vICAgICBtYW51YWxDaHVua3M6IHtcbiAgICAvLyAgICAgICAnd2hpdGUtYmxvY2snOiBbJ3doaXRlLWJsb2NrJywgJ0B3aGl0ZS1ibG9jay90eXBlcyddXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9LFxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMjAwMCxcbiAgICByZXBvcnRDb21wcmVzc2VkU2l6ZTogZmFsc2UsXG4gICAgc291cmNlbWFwOiBmYWxzZVxuICB9XG59KVxuIiwgIntcbiAgXCJuYW1lXCI6IFwiQHdoaXRlLWJsb2NrL2RvY3NcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjFcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkRvY3VtZW50cyBmb3Igd2hpdGUtYmxvY2tcIixcbiAgXCJwcml2YXRlXCI6IHRydWUsXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwid2hpdGUgYmxvY2tcIixcbiAgICBcImRvY3VtZW50c1wiXG4gIF0sXG4gIFwiYXV0aG9yXCI6IHtcbiAgICBcIm5hbWVcIjogXCJlcGhlbWVyYXNcIixcbiAgICBcImVtYWlsXCI6IFwiZXBoZW1lcmFzQHFxLmNvbVwiXG4gIH0sXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImRldlwiOiBcInZpdGVwcmVzcyBkZXYgLS1wb3J0IDI4ODAxXCIsXG4gICAgXCJidWlsZFwiOiBcInZpdGVwcmVzcyBidWlsZFwiLFxuICAgIFwicHJldmlld1wiOiBcInZpdGVwcmVzcyBwcmV2aWV3XCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHR5cGVzL21hcmtkb3duLWl0XCI6IFwiMTQuMS4yXCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi12dWUtanN4XCI6IFwiXjQuMS4xXCIsXG4gICAgXCJtYXJrZG93bi1pdFwiOiBcIl4xNC4xLjBcIixcbiAgICBcIm1hcmtkb3duLWl0LWNvbnRhaW5lclwiOiBcIl40LjAuMFwiLFxuICAgIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHNcIjogXCJeMjguMC4wXCIsXG4gICAgXCJ2aXRlcHJlc3NcIjogXCJeMS41LjBcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAd2hpdGUtYmxvY2svdHlwZXNcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHdoaXRlLWJsb2NrL3ZpdGVwcmVzc1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJheGlvc1wiOiBcIl4xLjcuN1wiLFxuICAgIFwiY29sb3JcIjogXCJeNC4yLjNcIixcbiAgICBcImZmbGF0ZVwiOiBcIl4wLjguMlwiLFxuICAgIFwiZ3JheS1tYXR0ZXJcIjogXCJeNC4wLjNcIixcbiAgICBcImdzYXBcIjogXCJeMy4xMi41XCIsXG4gICAgXCJwcmV0dGllclwiOiBcIl4zLjMuM1wiLFxuICAgIFwicmFkYXNoXCI6IFwiXjEyLjEuMFwiLFxuICAgIFwic2hpa2lcIjogXCJeMS4yMy4xXCIsXG4gICAgXCJ1bm9jc3NcIjogXCJeMC42NC4xXCIsXG4gICAgXCJ2aXRlcHJlc3MtcGx1Z2luLWdyb3VwLWljb25zXCI6IFwiXjEuMy4wXCIsXG4gICAgXCJ2dWVcIjogXCJeMy41LjEzXCIsXG4gICAgXCJ3aGl0ZS1ibG9ja1wiOiBcIndvcmtzcGFjZToqXCJcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyUSxPQUFPLFlBQVk7QUFDOVIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sWUFBWTtBQUVuQixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLDJCQUEyQjtBQUNwQyxPQUFPLGdCQUFnQjs7O0FDSnJCLGNBQVc7OztBREZiLElBQU0sbUNBQW1DO0FBVXpDLElBQU0sUUFBaUI7QUFBQSxFQUNyQixFQUFFLE1BQU0sTUFBTSxhQUFhLEdBQUcsUUFBUSxrQ0FBVyxjQUFjLENBQUMsSUFBSTtBQUFBO0FBQUEsRUFFcEUsRUFBRSxNQUFNLE1BQU0sYUFBYSxHQUFHLFFBQVEsa0NBQVcsc0JBQXNCLENBQUMsSUFBSTtBQUM5RTtBQUVBLElBQUksUUFBUSxJQUFJLGFBQWEsY0FBYztBQUN6QyxRQUFNLEtBQUs7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLGFBQWEsUUFBUSxrQ0FBVywrQkFBK0I7QUFBQSxFQUNqRSxDQUFDO0FBQ0QsUUFBTSxRQUFRO0FBQUEsSUFDWixNQUFNO0FBQUEsSUFDTixhQUFhLFFBQVEsa0NBQVcsZ0NBQWdDO0FBQUEsRUFDbEUsQ0FBQztBQUNIO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUSxFQUFFLGFBQWEsS0FBSyxVQUFVLE9BQU8sRUFBRTtBQUFBLEVBQy9DLFNBQVM7QUFBQSxJQUNQO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1Asb0JBQW9CO0FBQUEsSUFDcEIsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLFFBQ0o7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVMsQ0FBQyxVQUFVLGNBQWMsT0FBTztBQUFBLE1BQ3pDLFlBQVksQ0FBQyxLQUFLO0FBQUEsSUFDcEIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxXQUFXO0FBQUEsRUFDdkI7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNILFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFXTCx1QkFBdUI7QUFBQSxJQUN2QixzQkFBc0I7QUFBQSxJQUN0QixXQUFXO0FBQUEsRUFDYjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
