# A bit silly, but maybe useful later

# SHELL=bash

DEFAULT_TEST=jest

HELP_TEXT="\n\
Help\n\
\tmake build   - typescript build\n\
\tmake test    - Test using '$(DEFAULT_TEST)'\n\
\tmake jest    - Test using 'jest'  -- also runs jasmine tests :)\n\
\tmake jasmine - Test using 'jasmine'\n\
"

help:
	@echo -e $(HELP_TEXT) | sed -e 's/^ //'

build:
	yarn build

test: $(DEFAULT_TEST)

jest:
	yarn jest

jasmine:
	yarn jasmine

