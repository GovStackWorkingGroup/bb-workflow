# Installation

First, innstall `asdf` following these [instructions](https://asdf-vm.com/guide/getting-started.html#core-installation-complete).
Make sure to also install the node plugin for `asdf` as shown in the plugin section.

Next, follow these steps.

1. `git clone <project_from_git>`
2. `cd <project_from_git>`
3. start the bb you want to test with
   `cd ../examples/camunda && ./test_entrypoint.sh && cd ../`
4. `cd test/api-suite
5. `asdf install`
6. `yarn install`
7. `yarn run test`
