import yaml
import os 
import logging
import pathlib
import json 


dir_path = os.path.dirname(os.path.realpath(__file__))
base_config = os.path.join(dir_path, 'base-generated-config.yaml')
generated_config = os.path.join(dir_path, 'generated.yml')
examples_path = os.path.join(pathlib.Path(dir_path).parent, "examples")


def validate_example(example_path): 
  """
  Example should provide following data:
  - test_entrypoint.sh
    Used to initialize test application.  
  - config.json <future requirement>
    Will be used to configure gherkin test execution for particular application (e.g. URL's, data etc.)
  """
  elements = [os.path.basename(name) for name in os.listdir(example_path)]
  if 'test_entrypoint.sh' not in elements:
      print(F'Missing test_entrypoint.sh: {example_path}!')



with open(base_config) as f:
    circle_config = yaml.safe_load(f)
    
    available_examples = [name for name in pathlib.Path(examples_path).iterdir() if os.path.isdir(name)]

    examples = []
    circle_config['workflows']['test_everything']['jobs'] = []
    for path in available_examples:
      validate_example(path)
      path_str = str(pathlib.Path(path).absolute())
      name = str(os.path.basename(path))  
      new_example = {
        'path': path_str, 
        'example-app-name': name
      }
      circle_config['workflows']['test_everything']['jobs'].append({F'test-example': new_example})
      
    with open(generated_config, "w") as w: 
      yaml.dump(circle_config, w, default_flow_style=False)