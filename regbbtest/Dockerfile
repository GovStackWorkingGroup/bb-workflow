FROM joyzoursky/python-chromedriver:latest
COPY requirnments.txt requirnments.txt
RUN pip3 install -r requirnments.txt
COPY .  /test
WORKDIR /test/
CMD pytest
