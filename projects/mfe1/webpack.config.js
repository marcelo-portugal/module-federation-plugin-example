const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const mf = require("@angular-architects/module-federation/webpack");
// const path = require("path");

// const share = mf.share;

// const sharedMappings = new mf.SharedMappings();
// sharedMappings.register(
//   path.join(__dirname, '../../tsconfig.json'),
//   ['auth-lib']  
// );

module.exports = {
  output: {
    uniqueName: "mfe1",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: {
      name: entrypoint => entrypoint.name === "mfe1" ? false : 'runtime'
    }
  },  
  // resolve: {
  //   alias: {
  //     ...sharedMappings.getAliases(),
  //   }
  // },
  experiments: {
    outputModule: true
  },  
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        name: "mfe1",
        filename: "remoteEntry.js",  // 2-3K w/ Meta Data
        // exposes: ['./projects/mfe1/src/app/flights/flights.module.ts']
        exposes: {
            // './Module': './projects/mfe1/src/app/flights/flights.module.ts',
            './web-components': './projects/mfe1/src/web-component-bootstrap.ts'
        },        
        // shared: share({
        //   "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        //   "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        //   "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        //   "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
  
        //   // Uncomment for sharing lib of an Angular CLI or Nx workspace
        //   // ...sharedMappings.getDescriptors()
        // })
        
    }),
    // Uncomment for sharing lib of an Angular CLI or Nx workspace
    // sharedMappings.getPlugin(),
  ],
  devServer: {
    allowedHosts: 'all'
  }
};
