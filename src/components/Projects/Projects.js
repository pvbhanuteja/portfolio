import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import mailhunt from "../../Assets/Projects/mailhunt.png";
import densecrowd from "../../Assets/Projects/dense_crowd.png";
import segmentation from "../../Assets/Projects/segmentation.png";
import resnet from "../../Assets/Projects/resnet.png";
import mixup from '../../Assets/Projects/mixup.png';


// import Linking from 'react-native';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mixup}
              isBlog={false}
              title="mixRnet"
              description="While novel computer vision architectures are gaining traction, the impact of model architectures is often related to changes or exploring in training methods. Identity mapping-based architectures ResNets and DenseNets have promised path-breaking results in the image classification task and are go-to methods for even now if the data given is fairly limited. Considering the ease of training with limited resources this work revisits the ResNets and improves the ResNet50 by using mixup data-augmentation as regularization and tuning the hyper-parameters."
              doc_desc = "Link to arXiv"
              doc_link = "https://arxiv.org/abs/2111.11616"
              link="https://github.com/pvbhanuteja/mixRnet"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={segmentation}
              isBlog={false}
              title="Undergraduate Research, Semantic Segmentation"
              description="Used segnet, refinenet and pspnet models to segment image and then to improvise MIOU score,
designed pipeline using Yolo algorithm to detect the boxed objects first and later on got class imbalance quotient’s
from the training data-sets and used those on the box by box segmented results to reduce false-positive intersections
on the overall image."
              doc_desc = "View Thesis PDF"
              doc_link = "https://raw.githubusercontent.com/pvbhanuteja/portfolio/master/src/Assets/Btech_Thesis.pdf"
              // link="https://github.com/pvbhanuteja/semantic-segmentation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mailhunt}
              isBlog={false}
              title="mailhunt.io"
              description="Developed Full stack application to check if email address exists and also to check if an email is actually deliverable
              to the given email in real time. Restful APIs are developed using FASTapi and other python libraries and Frontend is developed using React JS and
              integrated with stripe. Deployed overall service infrastructure utilizing Docker container, VercelCI, and several AWS stack(Including EC2, ECS,
              S3, CloudFront, RDS, IAM), focusing on high-availability, and auto-scaling"
              doc_desc = "Visit Website"
              doc_link = "https://mailhunt.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={densecrowd}
              isBlog={false}
              title="Dense-Crowd counting"
              description="Implemented architecture that counts the total crowd in the dense crowd images using deep and shallow convolutional neural network
              Deep CNN helped to count near the part of the image where the density of the crowd is very high and shallow CNN
helped in detecting the persons who are completely visible (where the complete body was visible).
This method could detect up to 80% accuracy where the actual count in the image is approximately as high as 4000"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resnet}
              isBlog={false}
              title="Resnet on CIFAR"
              description="Implemented resnet using pytorch (both residual blocks and bottleneck blocks) for CIFAR dataset. Achieved 90% Accuracy on using bottleneck blocks 
              with a reset size of 18."
              link="https://github.com/pvbhanuteja/CIFAR-Resnet-Pytorch/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
