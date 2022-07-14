# syntax=docker/dockerfile:1

FROM python:3.8-alpine

COPY ./requirements.txt /backend/requirements.txt
WORKDIR /backend

RUN pip install -r requirements.txt

COPY . /backend

ENTRYPOINT [ "flask" ]
CMD ["run", "--host=0.0.0.0", "--port=5000"]
